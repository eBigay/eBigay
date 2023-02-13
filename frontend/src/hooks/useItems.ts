import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import useAxiosService from "../services/items.service";

function useItems() {
  const {
    query,
    getById,
    create,
    updateDetails,
    removeItemAction,
    getUserItems,
  } = useAxiosService();

  const queryClient = useQueryClient();

  const fetchItems = (filterBy: IFilterBy, pageParam: number) => {
    return query(filterBy, pageParam);
  };

  const useQueryAllItems = (filterBy: IFilterBy) =>
    useQuery(["items", filterBy], () => fetchItems(filterBy, filterBy.page), {
      onError: (error) => console.log(error) /* eslint-disable-line */,
    });

  const useInfiniteQueryAllItems = (filterBy: IFilterBy) =>
    useInfiniteQuery(
      ["items", filterBy],
      ({ pageParam = 1 }) => fetchItems(filterBy, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          console.log("last", lastPage, "all", allPages);
          const nextPage = allPages?.length + 1; /* eslint-disable-line */
          return lastPage?.length !== 0 ? nextPage : undefined;
        },
      }
    );

  const fetchUserItems = async (_id?: string) => {
    return await getUserItems(_id);
  };

  const useFetchUserItems = (_id?: string) =>
    useQuery(["items", _id], () => fetchUserItems(_id), {
      keepPreviousData: true,
      onError: (error) => console.log(error),
    });

  const addItem = (item: IItem) => {
    return create(item);
  };

  const add = useMutation(addItem, {
    onSuccess: (newItem) => {
      const { itemName } = newItem;
      queryClient.invalidateQueries(["items"]);
      toast.success(`Added New Item: ${itemName}`);
    },
    onError: (error: string) => {
      toast.error(`${error}`);
    },
  });

  const updateItem = (item: IItem) => {
    return updateDetails(item);
  };

  const update = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });

  const removeItem = (id: string) => {
    return removeItemAction(id);
  };

  const remove = useMutation(removeItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]).then(() => {
        toast.success(`Item removed`);
      });
    },
    onError: (error: string) => {
      toast.error(`${error}`);
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
