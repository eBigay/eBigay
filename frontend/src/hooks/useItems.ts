import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
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

  const addItem = (item: IItem) => {
    return itemsService.create(item);
  };

  const add = useMutation(addItem, {
    onSuccess: (newItem) => {
      const { itemName } = newItem;
      queryClient.setQueryData("items", (currentItems: IItem[] | undefined) => [
        ...(currentItems || []),
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
      queryClient.setQueryData("items", (currentItems: any) =>
        currentItems.map((item: IItem) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    },
  });

  const removeItem = (id: string) => {
    return itemsService.remove(id);
  };

  const remove = useMutation(removeItem, {
    onSuccess: (id) => {
      queryClient.setQueryData("items", (currentItems: any) =>
        currentItems.filter((item: IItem) => item.id !== id)
      );
    },
  });

  return {
    useQueryAllItems,
    useInfiniteQueryAllItems,
    add,
    update,
    remove,
  };
}

export default useItems;
