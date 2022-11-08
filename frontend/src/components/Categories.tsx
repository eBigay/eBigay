import { categoriesDemo } from "../data"
import CategoryItem from "./CategoryItem"
const Categories = () => {
  return (
    <div className="categories-container">
    {categoriesDemo.map((item) => (
        <CategoryItem key={item.id} title={item.title}  description={item.description} imageUrl={item.img} />
      ))}
    </div>
  )
}

export default Categories