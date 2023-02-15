import { FetchErrorMessage } from "../assets/styles/components/RecentItems.styled";
import ListContainer from "../assets/styles/layout/ItemList.styled";
import { IItem } from "../interfaces/IItem.interface";
import ItemCard from "./ItemCard";
import Loading from "./Loading";

interface IItemListProps {
  isLoading: boolean;
  isError: boolean;
  error: any;
  items: IItem[];
}

const ItemList = ({ isLoading, isError, error, items }: IItemListProps) => {
  if (isLoading)
    return (
      <ListContainer>
        <Loading />
      </ListContainer>
    );
  if (isError) return <FetchErrorMessage>{error.message}</FetchErrorMessage>;
  return (
    <ListContainer>
      {Array.isArray(items) &&
        items.map((item: IItem) => <ItemCard key={item._id} item={item} />)}
    </ListContainer>
  );
};

export default ItemList;
