import { useState } from "react";

import { UseQueryResult } from "react-query";
import { useItems } from "../hooks/useItems";
import { RecentItemsHeader } from "../assets/styles/components/RecentItems.styled";

import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";

import ItemList from "./ItemList";

const RecentItems = () => {
  const { useQueryAllItems } = useItems();

  const [filterBy, setFilterBy] = useState<IFilterBy>({
    queryText: "",
    category: "",
    page: 0,
    sortBy: "createdAt",
    sortOrder: "desc",
    limit: 8,
  });

  const {
    isLoading,
    data: items,
    isError,
    error,
  }: UseQueryResult<IItem[], any> = useQueryAllItems(filterBy);

  return (
    <>
      <RecentItemsHeader>Recently Added</RecentItemsHeader>
      <ItemList
        isLoading={isLoading}
        isError={isError}
        error={error}
        items={items ?? []}
      />
    </>
  );
};

export default RecentItems;
