import { lazy } from "react";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));

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
