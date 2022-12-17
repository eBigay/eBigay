import { UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import useFetchItems from "../hooks/useFetchItems";
import { IItem } from "../interfaces/IItem.interface";
import {
  FetchErrorMessage,
  RecentItemsContainer,
  RecentItemsHeader,
} from "../assets/styles/components/RecentItems.styled";

const RecentItems = () => {
  const {
    isLoading,
    data,
    isError,
    error,
  }: UseQueryResult<AxiosResponse, any> = useFetchItems();

  return (
    <>
      <RecentItemsHeader>Recently added</RecentItemsHeader>
      {isLoading && <Loading />}
      {isError && <FetchErrorMessage>{error.message}</FetchErrorMessage>}
      <RecentItemsContainer>
        {data?.data.map((item: IItem) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </RecentItemsContainer>
    </>
  );
};

export default RecentItems;
