import axios, { AxiosError } from "axios";
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
    onError: (error: AxiosError | Error) => {
      toast.error(
        `${
          axios.isAxiosError(error)
            ? error.response?.data.message
            : error.message
        }`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
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
    onError: (error: AxiosError | Error) => {
      toast.error(
        `${
          axios.isAxiosError(error)
            ? error.response?.data.message
            : error.message
        }`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    },
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
