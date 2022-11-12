import Category, { categoryProps } from "./Category";

const Categories = ({ categories }: { categories: categoryProps[] }) => {
  return (
    <div className="categories-container">
      <h1 className="fs24">Categories</h1>
      {categories.map((category, index) => (
        <Category key={index} category={category.category} url={category.url} />
      ))}
    </div>
  );
};

export default Categories;
