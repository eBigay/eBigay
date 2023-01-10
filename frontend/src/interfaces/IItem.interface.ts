import { IUser } from "./IUser.interface";

export interface IItem {
  id?: string;
  qty: number;
  itemName: string;
  mainImg: string;
  imgs?: string[];
  category: string;
  location: any;
  createdAt: number;
  description: string;
  createdBy: IUser;
}
