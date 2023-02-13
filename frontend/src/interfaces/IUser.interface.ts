export interface IUser {
  _id?: string;
  email: string;
  username: string;
  imageUrl?: string;
  phoneNumber: string;
  location?: string;
}
export interface IUserRespone {
  user: IUser;
}

export interface IUserState {
  user: IUser | null;
}

export interface IUserRegister {
  imageUrl?: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: string;
}
