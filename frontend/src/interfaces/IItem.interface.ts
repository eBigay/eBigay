export interface IItem {
  _id: string;
  qty: number;
  itemName: string;
  mainImg: string;
  imgs: string[];
  category: string;
  location: any;
  createdAt: number;
  createdBy: {
    _id: string;
    fullname: string;
    imgUrl: string;
  };
  description: string;
}
