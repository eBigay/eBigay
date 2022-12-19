import { useMutation, useQuery, useQueryClient } from "react-query";
import { itemsService } from "../services/items.service";
import { IItem } from "../interfaces/IItem.interface";

export function useItems() {
  const queryClient = useQueryClient();

  const fetchItems = () => {
    return itemsService.query();
  };

  const queryAllItems = () => useQuery("items", fetchItems);

  const addItem = (item: IItem) => {
    return itemsService.create(item);
  };

  const add = useMutation(addItem, {
    onSuccess: (addedItem) => {
      queryClient.setQueryData("items", (currentItems: any) => [
        ...currentItems,
        addedItem,
      ]);
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
    queryAllItems,
    add,
    update,
    remove,
  };
}
