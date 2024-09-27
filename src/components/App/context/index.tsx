import { createContext, ReactNode, useState } from "react";
import { UserModel } from "../../../models/user.model";

export interface IAuthContext {
  user: UserModel;
  setUser: (e: UserModel) => void;
  logged: boolean;
  setIsLogged: (e: boolean) => void;
}

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as UserModel);
  const [logged, setIsLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        setIsLogged,
        logged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
