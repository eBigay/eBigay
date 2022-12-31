import {
  Dispatch,
  useEffect,
  createContext,
  useReducer,
  ReactNode,
} from "react";

import { IUserState } from "../interfaces/IUser.inerface";

type AuthContextProps = {
  state: IUserState;
  dispatch: Dispatch<any>;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

type UserAction = { type: "LOGIN"; payload: IUserState } | { type: "LOGOUT" };

const authReducer = (state: IUserState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    if (user) {
      dispatch({ type: "LOGIN", payload: { user } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
