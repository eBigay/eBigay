import {
  CategoriesContainer,
  CategoriesHeader,
} from "../assets/styles/components/Categories.styled";
import Category, { CategoryProps } from "./Category";

const Categories = ({ categories }: { categories: CategoryProps[] }) => (
  <CategoriesContainer>
    <CategoriesHeader>Categories</CategoriesHeader>
    {categories.map((category, index) => (
      <Category key={index} category={category.category} url={category.url} />
    ))}
  </CategoriesContainer>
);

export default Categories;
