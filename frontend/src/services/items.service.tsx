import { IItem, INewItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const useItemsService = () => {
  const axiosPrivate = useAxiosPrivate();

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
    const { queryText = "", category, sortBy, sortOrder, limit } = filterBy;
    const res = await axiosPrivate.get(
      `items?q=${queryText}&limit=${limit}&page=${pageParam}&sort=${sortBy}&order=${sortOrder}${
        category ? `&category=${category}` : ""
      }`
    );
    return res.data;
  };

  const getById = async (item: IItem): Promise<IItem> => {
    const res = await axiosPrivate.get(`items/${item._id}`);
    return res.data;
  };

  const create = async (item: INewItem): Promise<IItem> => {
    const res = await axiosPrivate.post("items", item);
    return res.data;
  };

  const updateDetails = async (item: IItem): Promise<IItem> => {
    return axiosPrivate.put(`items/${item._id}`, item);
  };

  const removeItemAction = async (_id: string) => {
    const res = await axiosPrivate.delete(`items/${_id}`);
    return res.data;
  };

  const getUserItems = async (_id?: string) => {
    if (!_id) return Promise.reject();
    const res = await axiosPrivate.get(`items/createdBy?id=${_id}`);
    return res.data;
  };

  return {
    query,
    getById,
    create,
    updateDetails,
    removeItemAction,
    getUserItems,
  };
};

export default useItemsService;
