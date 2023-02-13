import { IUser } from "./IUser.interface";

export interface IItem {
  _id?: string;
  qty: number;
  itemName: string;
  images: string[];
  category: string;
  location: any;
  createdAt: number;
  description: string;
  createdBy: IUser;
}
