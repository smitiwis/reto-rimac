import { FC, ReactNode, useState } from "react";
import { FormValues, User } from "../../interfaces";
import UserDataContext from "./userDataContext";
import { UpdateUserData, UserDataContextType } from "./userDataTypes";

interface Props {
  children: ReactNode;
}

export const UserDataProvider: FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UpdateUserData>(
    {} as UserDataContextType
  );

  const updateUserData = (formData: FormValues, userValues: User) => {
    setUserData({ formHome: formData, user: userValues });
  };

  const contextValue: UserDataContextType = {
    user: userData.user || {} as User,
    formHome: userData.formHome || {} as FormValues,
    updateUserData,
  };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};
