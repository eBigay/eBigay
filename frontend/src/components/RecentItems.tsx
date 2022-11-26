import {
  RecentItemsContainer,
  RecentItemsHeader,
} from "../assets/styledComponents/components/RecentItems.styled";
import Items from "../json/items.json";
import ItemCard from "./ItemCard";

const RecentItems = () => {
  return (
    <>
      <RecentItemsHeader>Recently added</RecentItemsHeader>
      <RecentItemsContainer>
        {Items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </RecentItemsContainer>
    </>
  );
};

export default RecentItems;
