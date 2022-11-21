import categoriesDemo from "../data";
import FeaturedCategory from "./FeaturedCategory";

const FeaturedCategories = () => {
  return (
    <div className="categories-container">
      {categoriesDemo.map((cat) => (
        <FeaturedCategory
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
