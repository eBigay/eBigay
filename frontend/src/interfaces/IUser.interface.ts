export interface IUser {
  id?: string;
  email: string;
  username: string;
  isAdmin: boolean;
  ACCESS_TOKEN?: string;
  imageUrl?: string;
  phoneNumber: string;
}
export interface IUserRespone {
  user: IUser;
}
export interface IUserState {
  user: IUser | null;
}

export interface IUserRegister {
  imageUrl: string | undefined;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: string;
}
