import { createContext, useContext } from "react";
import { UserDataContextType } from "./userDataTypes";

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error(
      "useUserDataContext debe ser utilizado dentro de un <UserDataProvider></UserDataProvider>"
    );
  }

  return context;
};

export default UserDataContext;
