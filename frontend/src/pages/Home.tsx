import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import RecentItems from "../components/RecentItems";
import ItemDetails from "../components/ItemDetails";
import FadeIn from "../assets/styles/layout/FadeIn.styled";

const Home = () => {
  return (
    <>
      <ItemDetails />
      <FadeIn>
        <Hero />
        <FeaturedCategories />
        <RecentItems />
        <Footer />
      </FadeIn>
    </>
  );
};

export default Home;
