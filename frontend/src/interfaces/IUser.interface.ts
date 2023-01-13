export interface IUser {
  id?: string;
  email: string;
  name: string;
  isAdmin: boolean;
  accessToken?: string;
  imgUrl?: string;
  phoneNumber: string;
}
export interface IUserRespone {
  user: IUser;
}
export interface IUserState {
  user: IUser | null;
}
