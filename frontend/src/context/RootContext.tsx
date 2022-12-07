import React, { createContext, useState, useMemo } from "react";

export type RootContextType = {
  notificationOpen: boolean;
  setNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationContent: { title: string; message: string | string[] };
  setNotificationContent: React.Dispatch<
    React.SetStateAction<{
      title: string;
      message: string | string[];
    }>
  >;
};

const initialState: RootContextType = {
  notificationOpen: false,
  setNotificationOpen: () => {},
  notificationContent: { title: "", message: "" },
  setNotificationContent: () => {},
};

export const rootContext = createContext<RootContextType>(initialState);
const RootContextProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const [notificationContent, setNotificationContent] = useState<{
    title: string;
    message: string | string[];
  }>({ title: "", message: "" });

  const providerValue = useMemo(
    () => ({
      notificationOpen,
      setNotificationOpen,
      notificationContent,
      setNotificationContent,
    }),
    [
      notificationOpen,
      setNotificationOpen,
      notificationContent,
      setNotificationContent,
    ]

  );
  return (
    <rootContext.Provider value={providerValue}>
      {children}
    </rootContext.Provider>
  );
};

export default RootContextProvider;
