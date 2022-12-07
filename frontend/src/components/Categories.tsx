import {
  CategoriesContainer,
  CategoriesHeader,
} from "../assets/styles/components/Categories.styled";
import Category from "./Category";

interface CategoryProps {
  id: number;
  category: string;
  url: string;
}

const Categories = ({ categories }: { categories: CategoryProps[] }) => (
  <CategoriesContainer>
    <CategoriesHeader>Categories</CategoriesHeader>
    {categories.map((category) => (
      <Category
        key={category.id}
        category={category.category}
        url={category.url}
      />
    ))}
  </CategoriesContainer>
);

export default Categories;
