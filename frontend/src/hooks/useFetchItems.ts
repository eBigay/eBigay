import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IItem } from "../interfaces/IItem.interface";
import itemsService from "../services/items.service";

const fetchItems = () => {
  return itemsService.query();
};

const addItem = (item: IItem) => {
  return itemsService.create(item);
};

const useFetchItems = () => {
  return useQuery(["Items"], fetchItems);
};

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: (data: IItem) => {
      //! 'data' refers to the *entire* response from the POST request
      // queryClient.invalidateQueries('super-heroes')
      // ? invalidate the query and force a refetch on success
      //* OR
      queryClient.setQueriesData(["items"], (oldQueryData: any) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data],
          // this function automatically accepts the "old" data, and we use the response from the
          // POST request to to update the data we have without firing another refetch
          // (instead of 'queryClient.invalidateQueries')
        };
      });
    },
  });
};

export default useFetchItems;
