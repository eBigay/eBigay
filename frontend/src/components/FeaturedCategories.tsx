import { categoriesDemo } from "../data";
import FeatuerdCategory from "./FeatuerdCategory";
import { FeaturedContainer } from "../assets/styledComponents/components/FeaturedCategories.styled";
const FeaturedCategories = () => {
  return (
    <FeaturedContainer>
      {categoriesDemo.map((cat) => (
        <FeatuerdCategory
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
