export interface IUser {
  id?: string;
  email: string;
  accessToken?: string;
}
export interface IUserRespone {
  user: IUser;
}
export interface IUserState {
  user: IUser | null;
}
