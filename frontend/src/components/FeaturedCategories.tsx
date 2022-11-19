import { categoriesDemo } from "../data";
import FeatuerdCategory from "./FeatuerdCategory";

const FeaturedCategories = () => {
  return (
    <div className="categories-container">
      {categoriesDemo.map((cat) => (
        <FeatuerdCategory
          navUrl={cat.navUrl}
          key={cat.id}
          title={cat.title}
          description={cat.description}
          imageUrl={cat.img}
        />
      ))}
    </div>
  );
};

export default FeaturedCategories;
