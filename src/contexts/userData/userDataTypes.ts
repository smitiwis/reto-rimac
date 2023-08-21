import { FormValues, User } from "../../interfaces";

export interface UserDataContextType {
  user: User;
  formHome: FormValues;
  updateUserData: (nformData: FormValues, userValues: User) => void;
}

export interface UpdateUserData {
  user: User;
  formHome: FormValues;
}
