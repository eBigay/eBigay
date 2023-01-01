import { httpService } from "./http.service";
import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";

const query = async (
  filterBy: IFilterBy = {
    queryText: "",
    category: "",
    page: 1,
    sortBy: "",
    sortOrder: "",
    limit: 4,
  },
  pageParam: number = 1
): Promise<IItem[]> => {
  const { queryText, category, sortBy, sortOrder, limit } = filterBy;
  return httpService.get<IItem[]>(
    `items?q=${queryText}&_limit=${limit}&_page=${pageParam}&_sort=${sortBy}&_order=${sortOrder}${
      category ? `&category=${category}` : ""
    }`
  );
};

const getById = async (item: IItem): Promise<IItem> => {
  return httpService.get<IItem>(`items/${item.id}`);
};

const create = async (item: IItem): Promise<IItem> => {
  console.log(item);
  return httpService.post<IItem>("items", item);
};

const update = async (item: IItem): Promise<IItem> => {
  return httpService.put<IItem>(`items/${item.id}`, item);
};

const remove = async (id: string) => {
  await httpService.delete(`items/${id}`);
};

export const itemsService = {
  query,
  getById,
  create,
  update,
  remove,
};
