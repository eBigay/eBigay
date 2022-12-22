import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { IUser } from "../interfaces/IUser.inerface";
import { userService } from "../services/user.service";
import useAuthContext from "./useAuthContext";

const useAuth = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signupUser = (userInfo: IUser) => {
    return userService.signup(userInfo);
  };

  const signup = useMutation(signupUser, {
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: user });
    },
  });

  const loginUser = (credentials: { email: string; password: string }) => {
    return userService.login(credentials);
  };

  const login = useMutation(loginUser, {
    onSuccess: (user) => {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    },
  });

  const logoutUser = () => {
    return userService.logout();
  };

  const logout = useMutation(logoutUser, {
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
    },
  });

  return {
    login,
    logout,
    signup,
  };
};

export default useAuth;
