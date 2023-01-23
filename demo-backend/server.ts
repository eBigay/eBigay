require("dotenv").config();
const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
import IUser, {
  IUsersList,
  LoginArgs,
  IsAuthenticatedArgs,
} from "./interfaces/auth.interface";

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "77a333708faa8bb381702f7af5fe26f9b9a8d71b57f6f64a7307ec077923e20a"

const expiresInDefault = "1h";
const expiresInLong = "7d";

// Create a token from a payload
function createToken(
  payload: { email: string; password: string },
  rememberMe?: boolean
): string {
  const expiresIn = rememberMe ? expiresInLong : expiresInDefault;
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY, (err: Error, decode: any) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isEmailExist(email: string): IUser | false {
  const user = userdb.users.find(
    (user: IUser) => user.email.toLowerCase() === email.toLowerCase()
  );
  return user || false;
}

// Check if the given password matches the user's password
function isAuthenticated({ user, password }: IsAuthenticatedArgs) {
  return user.password === password;
}

// Register New User
server.post("/auth/signup", (req: Request, res: Response) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { email, password, username, phoneNumber, location, imageUrl }: IUser =
    req.body;
  if (isEmailExist(email)) {
    const status = 401;
    const message = "Email already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err: Error, data: IUsersList) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    var data: IUsersList = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id!;

    //Add new user
    data.users.push({
      id: last_item_id + 1,
      email,
      password,
      username,
      phoneNumber,
      location,
      imageUrl,
    }); // add some data
    fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err: Error, result: any) => {
        // WRITE
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  // Create token for new user
  const ACCESS_TOKEN = createToken({ email, password });
  console.log("Access Token:" + ACCESS_TOKEN);
  const returnValues = {
    ACCESS_TOKEN,
    email,
    password,
    username,
    phoneNumber,
    location,
    imageUrl,
  };
  res.status(200).json(returnValues);
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req: Request, res: Response) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password, rememberMe }: LoginArgs = req.body;
  const user = isEmailExist(email);
  if (!user) {
    const status = 401;
    const message = "Email is not registered";
    res.status(status).json({ status, message });
    return;
  }
  if (!isAuthenticated({ user, password })) {
    const status = 401;
    const message = "Incorrect Password";
    res.status(status).json({ status, message });
    return;
  }
  const ACCESS_TOKEN = createToken({ email, password }, rememberMe);
  console.log("Access Token:" + ACCESS_TOKEN);
  res.status(200).json({ ...user, ACCESS_TOKEN });
});

server.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "GET" && (req.path === "/items" || req.path === "/auth")) {
    next();
    return;
  }
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    next();
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);
    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(4000, () => {
  console.log("Run Auth API Server");
});
