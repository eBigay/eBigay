import { useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import ItemModal from "../components/ItemModal";
import RecentItems from "../components/RecentItems";
import ProductDetails from "../components/ProductDetails";

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
