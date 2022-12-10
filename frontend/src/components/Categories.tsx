import {
  CategoriesContainer,
  CategoriesHeader,
} from "../assets/styles/components/Categories.styled";
import Category from "./Category";

interface CategoriesProps {
  id: number;
  category: string;
  url: string;
}

const Categories = ({ categories }: { categories: CategoriesProps[] }) => (
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
