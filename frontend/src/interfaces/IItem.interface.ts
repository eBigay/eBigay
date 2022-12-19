export interface IItem {
  id?: string;
  qty: number;
  itemName: string;
  mainImg: string;
  imgs?: string[];
  category: string;
  location: any;
  createdAt: number;
  createdBy: {
    id?: string;
    fullName?: string;
    imgUrl: string;
  };
  description: string;
}
