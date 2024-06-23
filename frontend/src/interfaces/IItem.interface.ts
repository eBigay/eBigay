import { IUser } from "./IUser.interface";

export interface IItem {
  _id?: string;
  qty: number;
  itemName: string;
  images: string[];
  category: string;
  location: any;
  createdAt: number;
  condition: string;
  description: string;
  createdBy: IUser;
}
export interface INewItem {
  qty: number;
  itemName: string;
  images: string[];
  category: string;
  location: any;
  createdAt: number;
  condition: string;
  description: string;
  createdBy: string;
}
