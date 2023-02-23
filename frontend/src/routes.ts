import { lazy } from "react";
import PrivateRoutes from "./components/PrivateRoutes";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Unauthorized from "./pages/Unauthorized";

const Home = lazy(() => {
  return import("./pages/Home");
});
const About = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/About");
});
const Search = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Search");
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

const ROLES = {
  User: 1998,
  Admin: 2023,
};

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
  {
    path: "/unauthorized",
    element: Unauthorized,
    key: "Unauthorized",
  },

  {
    element: PrivateRoutes,
    key: "Private",
    props: { allowedRoles: [ROLES.User] },
    nested: [
      {
        path: "/addnew",
        element: AddNew,
        key: "AddNew",
      },
      {
        path: "/profile",
        element: Profile,
        key: "Profile",
      },
      {
        path: "/settings",
        element: Settings,
        key: "settings",
      },
    ],
  },
];

export default routes;
