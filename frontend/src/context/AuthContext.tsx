import {
  Dispatch,
  createContext,
  useReducer,
  ReactNode,
  useMemo,
  useState,
  SetStateAction,
} from "react";
import { IAuth } from "../interfaces/IAuthState.interface";

type AuthContextProps = {
  auth: IAuth;
  dispatch: Dispatch<any>;
  persistState: any;
  setPersistState: SetStateAction<any>;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

type AuthAction =
  | { type: "LOGIN"; payload: IAuth }
  | { type: "LOGOUT" }
  | { type: "REFRESH_TOKEN"; payload: IAuth };

const authReducer = (auth: IAuth, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return { user: null };
    case "REFRESH_TOKEN":
      return action.payload;
    default:
      return auth;
  }
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [auth, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const [persistState, setPersistState] = useState<boolean>(
    // @ts-ignore
    JSON.parse(localStorage.getItem("persist")) || false
  );

  const value = useMemo(
    () => ({ auth, dispatch, persistState, setPersistState }),
    [auth, persistState, setPersistState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
