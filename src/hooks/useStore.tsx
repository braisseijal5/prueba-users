import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/entities";

export interface StoreContext {
  initialUsersData: User[];
  usersData: User[];
  onGetInitialData: (users: User[]) => void;
}

const StoreContext = createContext<StoreContext>({} as any);

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (ctx == null) {
    throw new Error("It has to be used only on descendants");
  } else {
    return ctx;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [initialUsersData, setInitialUsersData] = useState<User[]>([]);
  const [usersData, setUsersData] = useState<User[]>([]);

  const onGetInitialData = (users: User[]) => {
    setInitialUsersData(users);
    setUsersData(users);
  };

  const value: StoreContext = {
    initialUsersData,
    usersData,
    onGetInitialData,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
