import { httpService } from "./http.service";
import { IItem } from "../interfaces/IItem.interface";

const query = async (page?: string): Promise<IItem[]> => {
  return await httpService.get<IItem[]>(`items?page=${page}`);
};

const getById = async (item: IItem): Promise<IItem> => {
  return await httpService.get<IItem>(`items/${item.id}`);
};

const create = async (item: IItem): Promise<IItem> => {
  console.log(item);
  return await httpService.post<IItem>("items", item);
};

const update = async (item: IItem): Promise<IItem> => {
  return await httpService.put<IItem>(`items/${item.id}`, item);
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
