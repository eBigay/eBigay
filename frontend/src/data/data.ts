import womenCategory from "../assets/svgs/womenCategory.svg";
import menCategory from "../assets/svgs/menCategory.svg";
import fornitureCategory from "../assets/svgs/fornitureCategory.svg";
import variousItemsCategory from "../assets/svgs/variousItemsCategory.svg";

const categoriesDemo = [
  {
    id: 1,
    img: womenCategory,
    title: "Women",
    description: "Clothes, Shoes, Bags, Jewelry, Accessories",
    navUrl: "/search?category=women+clothes",
  },
  {
    id: 2,
    img: menCategory,
    title: "Man",
    description: "Clothes, Shoes, Bags, Jewelry, Accessories",
    navUrl: "/search?category=men+clothes",
  },
  {
    id: 3,
    img: fornitureCategory,
    title: "Furniture",
    description: "Clothes, Shoes, Bags, Jewelry, Accessories",
    navUrl: "/search?category=furniture",
  },
  {
    id: 4,
    img: variousItemsCategory,
    title: "Various items",
    description: "Clothes, Shoes, Bags, Jewelry, Accessories",
    navUrl: "/search?category=various+items",
  },
];

export default categoriesDemo;
