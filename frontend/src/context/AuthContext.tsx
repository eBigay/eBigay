import {
  Dispatch,
  useEffect,
  createContext,
  useReducer,
  ReactNode,
  useMemo,
} from "react";

import { IUserState } from "../interfaces/IUser.inerface";

const INITIAL_STATE: IUserState = {
  user: null,
};

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
      return INITIAL_STATE;
    default:
      return state;
  }
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE, () => {
    const currItem = localStorage.getItem("user");
    return currItem ? JSON.parse(currItem) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  const providerValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
