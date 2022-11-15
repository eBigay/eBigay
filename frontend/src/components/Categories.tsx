import { CategoriesContainer } from "../assets/styledComponents/components/Categories.styled";
import Category, { categoryProps } from "./Category";

const Categories = ({ categories }: { categories: categoryProps[] }) => {
  return (
    <CategoriesContainer>
      <h1 className="fs24">Categories</h1>
      {categories.map((category, index) => (
        <Category key={index} category={category.category} url={category.url} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
