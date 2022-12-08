import { lazy } from "react";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const Home = lazy(async () => {
  /* eslint-disable-next-line */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Home");
});
const About = lazy(async () => {
  /* eslint-disable-next-line */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/About");
});
const Login = lazy(async () => {
  /* eslint-disable-next-line */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Login");
});

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
  {
    path: "/search",
    element: Search,
    key: "Login",
  },
  {
    path: "*",
    element: NotFound,
    key: "notFound",
  },
];

export default routes;
