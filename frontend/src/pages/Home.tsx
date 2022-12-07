import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import RecentItems from "../components/RecentItems";
import ProductDetails from "../components/ProductDetails";

const Home = () => {
  return (
    <>
      <ProductDetails />
      <Hero />
      <FeaturedCategories />
      <RecentItems />
      <Footer />
    </>
  );
};

export default Home;
