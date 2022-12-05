import { Dispatch } from "react";
import { useEffect } from "react";
import { createContext, useReducer, ReactNode } from "react";
import { IItem } from "../interfaces/IItem.interface";

const INITIAL_STATE: IItem = {
  _id: "",
  qty: 0,
  itemName: "",
  mainImg: "",
  category: "",
  location: "",
  createdAt: 0,
  description: "",
  imgs: [],
  createdBy: {
    _id: "",
    fullname: "",
    imgUrl: "",
  },
};

type ItemContextProps = {
  itemState: IItem;
  dispatch: Dispatch<any>;
};

export const ItemContext = createContext<ItemContextProps>(
  {} as ItemContextProps
);

type ItemAction = { type: "SET_ITEM"; payload: IItem } | { type: "RESET_ITEM" };

const ItemReducer = (state: IItem, action: ItemAction) => {
  switch (action.type) {
    case "SET_ITEM":
      return action.payload;
    case "RESET_ITEM":
      return INITIAL_STATE;
    default:
      return state;
  }
};

type ItemProviderProps = {
  children: ReactNode;
};

export const ItemContextProvider = ({ children }: ItemProviderProps) => {
  const [itemState, dispatch] = useReducer(ItemReducer, INITIAL_STATE, () => {
    const currItem = localStorage.getItem("current-item");
    return currItem ? JSON.parse(currItem) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("current-item", JSON.stringify(itemState));
  }, [itemState]);

  return (
    <ItemContext.Provider
      value={{
        itemState,
        dispatch,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
