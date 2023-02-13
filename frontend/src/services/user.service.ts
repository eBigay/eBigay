import axios from "../api/axios";
import { IAuth } from "../interfaces/IAuthState.interface";
import { IUser, IUserRegister } from "../interfaces/IUser.interface";
import httpService from "./http.service";

const saveLocalUser = (user: IUser): IUser => {
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

const login = async (credentials: {
  email: string;
  password: string;
}): Promise<IAuth | undefined> => {
  try {
    const res = await axios.post<IAuth>("auth", credentials, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

const signup = async (userInfo: IUserRegister): Promise<IAuth> => {
  try {
    const res = await axios.post<IAuth>("register", userInfo, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

const logout = async (): Promise<void> => {
  try {
    await axios("/logout", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

const updateUser = async (user: IUser): Promise<void> => {
  try {
    await httpService.put(`user/${user._id}`, user);
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

const userService = {
  login,
  logout,
  signup,
  updateUser,
  getUsers,
  getById,
};

export default userService;
