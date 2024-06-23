import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import RecentItems from "../components/RecentItems";
import ItemDetails from "../components/ItemDetails";
import FadeIn from "../assets/styles/layout/FadeIn.styled";
import Chat from "../components/Chat";
import Modal from "../components/Modal";
import useModalContext from "../hooks/useModalContext";

const Home = () => {
  const { modalType } = useModalContext();

  return (
    <>
      <Modal>{modalType === "item" ? <ItemDetails /> : <Chat />}</Modal>
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
