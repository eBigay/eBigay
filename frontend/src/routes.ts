import { lazy } from "react";
import NotFound from "./pages/NotFound";

const Home = lazy(() => {
  return import("./pages/Home");
});
const Search = lazy(() => {
  return import("./pages/Search");
});
const About = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/About");
});
const LoginSignup = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/LoginSignup");
});
const Profile = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Profile");
});
const AddNew = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/AddNewItem");
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
    path: "/profile",
    element: Profile,
    key: "Profile",
  },
  {
    path: "/addnew",
    element: AddNew,
    key: "AddNew",
  },
  {
    path: "*",
    element: NotFound,
    key: "NotFound",
  },
];

export default routes;
