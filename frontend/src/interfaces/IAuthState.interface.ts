import { IUser } from "./IUser.interface";

export interface IAuth {
  user: IUser | null;
  roles?: Number[];
  accessToken?: string;
}
