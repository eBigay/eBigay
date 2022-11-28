import { lazy } from "react";
import ProductDetails from "./components/ProductDetails";
import { NotFound } from "./pages/NotFound";
const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return import("./pages/Home");
});
const About = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return import("./pages/About");
});
const Login = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return import("./pages/Login");
});
import Search from "./pages/Search";

const routes = [
  {
    path: "/",
    element: Home,
    key: "Home",
    nested: {
      path: "product/:id",
      element: ProductDetails,
      key: "product",
    },
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
