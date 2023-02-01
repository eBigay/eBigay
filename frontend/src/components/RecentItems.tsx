import { UseInfiniteQueryResult } from "@tanstack/react-query";
import useItems from "../hooks/useItems";
import { RecentItemsHeader } from "../assets/styles/components/RecentItems.styled";

import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";

import ItemList from "./ItemList";

const RecentItems = () => {
  const { useInfiniteQueryAllItems } = useItems();

  const filterBy: IFilterBy = {
    queryText: "",
    category: "",
    page: 0,
    sortBy: "createdAt",
    sortOrder: "desc",
    limit: 12,
  };

  const {
    data,
    isLoading,
    isError,
    error,
  }: UseInfiniteQueryResult<IItem[], any> = useInfiniteQueryAllItems(filterBy);

  return (
    <>
      <RecentItemsHeader>Recently Added</RecentItemsHeader>
      <ItemList
        isLoading={isLoading}
        isError={isError}
        error={error}
        items={data?.pages[0] || []}
      />
    </>
  );
};

export default RecentItems;
