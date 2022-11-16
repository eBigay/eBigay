import Items from "../json/items.json";
import ItemCard from "./ItemCard";

const RecentItems = () => {
  return (
    <>
      <div className="recently-add">
        <h2>Recently added</h2>
      </div>
      <div className="recent-items-container">
        {Items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default RecentItems;
