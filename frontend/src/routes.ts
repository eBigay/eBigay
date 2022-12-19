import { lazy } from "react";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const Home = lazy(() => {
  return import("./pages/Home");
});
const About = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/About");
});
const LoginSignup = lazy(async () => {
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
    key: "Login",
  },
  {
    path: "*",
    element: NotFound,
    key: "notFound",
  },
];

export default routes;
