import { createContext, ReactNode, useEffect, useState } from "react";
import { UserModel } from "../../../models/user.model";
import AuthService from "../../../service/auth.service";

export interface IAuthContext {
  user: UserModel;
  setUser: (e: UserModel) => void;
  loading: boolean;
  signOut: () => void;
  getUser: () => void;
}

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as UserModel);
  const [loading, setLoading] = useState<boolean>(false);

  const getUser = async () => {
    const token: string | null = AuthService.getToken();
    try {
      setLoading(true);
      const data = await AuthService.profile(token);
      setUser(data);
    } catch (err) {
      console.log(err);
      setUser({} as UserModel);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    AuthService.removeToken();
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        loading,
        signOut,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
