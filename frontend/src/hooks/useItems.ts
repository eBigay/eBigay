import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import itemsService from "../services/items.service";
import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";

function useItems() {
  const queryClient = useQueryClient();

  const fetchItems = (filterBy: IFilterBy, pageParam: number) => {
    return itemsService.query(filterBy, pageParam);
  };

  const useQueryAllItems = (filterBy: IFilterBy) =>
    useQuery(["items", filterBy], () => fetchItems(filterBy, filterBy.page), {
      keepPreviousData: true,
      onError: (error) => console.log(error) /* eslint-disable-line */,
    });

  const useInfiniteQueryAllItems = (filterBy: IFilterBy) =>
    useInfiniteQuery(
      ["items", filterBy],
      ({ pageParam = 1 }) => fetchItems(filterBy, pageParam),
      {
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages?.length + 1; /* eslint-disable-line */
          return lastPage?.length !== 0 ? nextPage : undefined;
        },
      }
    );

  const fetchUserItems = async (id?: string) => {
    return await itemsService.getUserItems(id);
  };

  const useFetchUserItems = (id?: string) =>
    useQuery(["items", id], () => fetchUserItems(id), {
      keepPreviousData: true,
      onError: (error) => console.log(error),
    });

  const addItem = (item: IItem) => {
    return itemsService.create(item);
  };

  const add = useMutation(addItem, {
    onSuccess: (newItem) => {
      const { itemName } = newItem;
      queryClient.setQueryData(["items"], (oldItems: IItem[] | undefined) => [
        ...(oldItems || []),
        newItem,
      ]);
      toast.success(`Added New Item: ${itemName}`);
    },
    onError: (error: string) => {
      toast.error(`${error}`);
    },
  });

  const updateItem = (item: IItem) => {
    return itemsService.update(item);
  };

  const update = useMutation(updateItem, {
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(["items"], (oldItems: any) =>
        oldItems.map((item: IItem) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
      queryClient.invalidateQueries(["items"]);
    },
  });

  const removeItem = (id: string) => {
    return itemsService.remove(id);
  };

  const remove = useMutation(removeItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });

  return {
    useQueryAllItems,
    useInfiniteQueryAllItems,
    useFetchUserItems,
    add,
    update,
    remove,
  };
}

export default useItems;
