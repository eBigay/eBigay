import categoriesDemo from "../data/data";
import FeaturedContainer from "../assets/styles/components/FeaturedCategories.styled";
import FeaturedCategory from "./FeaturedCategory";

const FeaturedCategories = () => {
  return (
    <FeaturedContainer>
      {categoriesDemo.map((cat) => (
        <FeaturedCategory
          navUrl={cat.navUrl}
          key={cat.id}
          title={cat.title}
          description={cat.description}
          imageUrl={cat.img}
        />
      ))}
    </FeaturedContainer>
  );
};

export default FeaturedCategories;
