import { lazy } from "react";
import NotFound from "./pages/NotFound";

const Home = lazy(() => {
  // eslint-disable-next-line
  return import("./pages/Home");
});
const Search = lazy(() => {
  // eslint-disable-next-line
  return import("./pages/Search");
});
const About = lazy(async () => {
  // eslint-disable-next-line
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/About");
});
const LoginSignup = lazy(async () => {
  // eslint-disable-next-line
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/LoginSignup");
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
    element: LoginSignup,
    props: { type: "login" },
    key: "Login",
  },
  {
    path: "/SignUp",
    element: LoginSignup,
    props: { type: "signup" },
    key: "SignUp",
  },
  {
    path: "/search",
    element: Search,
    key: "Search",
  },
  {
    path: "*",
    element: NotFound,
    key: "NotFound",
  },
];

export default routes;
