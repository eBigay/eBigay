const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresInDefault = '1h'
const expiresInLong = '7d'

// Create a token from a payload 
function createToken(payload, rememberMe) {
  const expiresIn = rememberMe ? expiresInLong : expiresInDefault
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  const user = userdb.users.find(user => user.email === email && user.password === password)
  return user ? user : false
}

// Register New User
server.post('/auth/signup', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { email, password, username, phoneNumber, location, imgUrl } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = 'Email and Password already exist';
    res.status(status).json({ status, message });
    return
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({
      id: last_item_id + 1, email, password, username, phoneNumber, location, imgUrl
    }); // add some data
    fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return
      }
    });
  });

  // Create token for new user
  const ACCESS_TOKEN = createToken({ email, password })
  console.log("Access Token:" + ACCESS_TOKEN);
  const returnValues = { ACCESS_TOKEN, email, password, username, phoneNumber, location, imgUrl }
  res.status(200).json(returnValues)
})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password, rememberMe } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }
  const ACCESS_TOKEN = createToken({ email, password }, rememberMe)
  console.log("Access Token:" + ACCESS_TOKEN);
  const user = (isAuthenticated({ email, password }))
  res.status(200).json({ ...user, ACCESS_TOKEN })
})

server.use((req, res, next) => {
  if (req.method === 'GET' && (req.path === '/items' || req.path === '/auth')) {
    next();
    return;
  }
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    next()
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({ status, message })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({ status, message })
  }
});


server.use(router)

server.listen(4000, () => {
  console.log('Run Auth API Server')
})