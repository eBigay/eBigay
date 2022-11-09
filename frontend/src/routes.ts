import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: Home,
    key: "Home",
  },
  {
    path: "/about",
    element: About,
    key: "About",
  },
  {
    path: "/login",
    element: Login,
    key: "Login",
  },
];

export default routes;
