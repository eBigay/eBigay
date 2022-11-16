import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RecentItems from "../components/RecentItems";
const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <FeaturedCategories />
      <RecentItems />
      <Footer />
    </div>
  );
};

export default Home;
