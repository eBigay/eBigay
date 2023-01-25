import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
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
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: { user } });
        navigate("/");
      }, 1100);
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
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
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: { user } });
        navigate("/");
      }, 1100);
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  const logoutUser = () => {
    return userService.logout();
  };

  const logout = useMutation(logoutUser, {
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      if (
        window.location.pathname === "/profile" ||
        window.location.pathname === "/addnew"
      )
        navigate("/");
    },
  });

  return {
    login,
    logout,
    signup,
  };
};

export default useAuth;
