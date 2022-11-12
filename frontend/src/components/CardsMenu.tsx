import { categoriesDemo } from "../data";
import CardItem from "./Card";
const CardsMenu = () => {
  return (
    <div className="cards-container">
      {categoriesDemo.map((item) => (
        <CardItem
          navUrl={item.navUrl}
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.img}
        />
      ))}
    </div>
  );
};

export default CardsMenu;
