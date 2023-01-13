export interface IUser {
  id?: string;
  email: string;
  name: string;
  isAdmin: boolean;
  accessToken?: string;
  imgUrl?: string;
}
export interface IUserRespone {
  user: IUser;
}
export interface IUserState {
  user: IUser | null;
}

export interface IUserRegister {
  ImageUrl: string | undefined;
  Username: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  Location: string;
}
