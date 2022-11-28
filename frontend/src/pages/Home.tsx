import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import RecentItems from "../components/RecentItems";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <RecentItems />
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
