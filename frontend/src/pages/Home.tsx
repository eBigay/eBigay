import { useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ItemModal from "../components/ItemModal";
import RecentItems from "../components/RecentItems";

const Home = () => {
  return (
    <>
      <ItemModal />
      <Hero />
      <FeaturedCategories />
      <RecentItems />
      <Footer />
    </>
  );
};

export default Home;
