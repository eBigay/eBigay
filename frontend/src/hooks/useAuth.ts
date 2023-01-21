import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { IUserRegister } from "../interfaces/IUser.interface";
import userService from "../services/user.service";
import useAuthContext from "./useAuthContext";

const useAuth = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signupUser = (userInfo: IUserRegister) => {
    return userService.signup(userInfo);
  };

  const signup = useMutation(signupUser, {
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: { user } });
      navigate("/");
    },
    onError: (error) => console.log(error) /* eslint-disable-line */,
  });

  const loginUser = (credentials: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    return userService.login(credentials);
  };

  const login = useMutation(loginUser, {
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: { user } });
      navigate("/");
    },
    onError: (error) => console.log(error) /* eslint-disable-line */,
  });

  const logoutUser = () => {
    return userService.logout();
  };

  const logout = useMutation(logoutUser, {
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    },
  });

  return {
    login,
    logout,
    signup,
  };
};

export default useAuth;
