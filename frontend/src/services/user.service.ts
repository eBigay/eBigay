import { IUser } from "../interfaces/IUser.interface";
import httpService from "./http.service";

const saveLocalUser = (user: IUser): IUser => {
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

const login = async (credentials: {
  email: string;
  password: string;
}): Promise<IUser | undefined> => {
  try {
    const user = await httpService.post<IUser>("auth/login", credentials);
    if (user) return saveLocalUser(user);
  } catch (err) {
    throw err;
  }
};

const signup = async (userInfo: IUser): Promise<IUser> => {
  try {
    const user = await httpService.post<IUser>("auth/signup", userInfo);
    return saveLocalUser(user);
  } catch (err) {
    throw err;
  }
};

const logout = async (): Promise<void> => {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    throw err;
  }
};

const updateUser = async (user: IUser): Promise<void> => {
  try {
    await httpService.put(`user/${user.id}`, user);
  } catch (err) {
    throw err;
  }
};

const getUsers = async (): Promise<IUser[]> => {
  try {
    return await httpService.get("user");
  } catch (err) {
    throw err;
  }
};

const getById = async (userId: string): Promise<IUser> => {
  try {
    return await httpService.get(`user/${userId}`);
  } catch (err) {
    throw err;
  }
};

export const userService = {
  login,
  logout,
  signup,
  updateUser,
  getUsers,
  getById,
};
