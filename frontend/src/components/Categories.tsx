import {
  CategoriesContainer,
  CategoriesHeader,
} from "../assets/styles/components/Categories.styled";
import Category from "./Category";

interface CategoryProps {
  id: number;
  category: string;
}

interface CategoriesProps {
  categories: CategoryProps[];
  onSetFilter: (field: string, value: string) => void;
}

const Categories = ({ categories, onSetFilter }: CategoriesProps) => (
  <CategoriesContainer>
    <CategoriesHeader>Categories</CategoriesHeader>
    {categories.map((category) => (
      <Category
        key={category.id}
        onSetFilter={onSetFilter}
        category={category.category}
      />
    ))}
  </CategoriesContainer>
);

export default Categories;
