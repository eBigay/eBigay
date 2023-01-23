export default interface IUser {
  id?: string;
  imageUrl: string | undefined;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: string;
}

export interface IUsersList {
  users: IUser[];
}

export interface LoginArgs {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IsAuthenticatedArgs {
  user: IUser;
  password: string;
}
