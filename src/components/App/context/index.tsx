import { createContext, ReactNode, useEffect, useState } from "react";
import { UserModel } from "../models/user.model";
import { AuthModel } from "src/models/auth.model";
import AuthService from "../services/auth.service";

export interface IAuthContext {
  user: UserModel;
  setUser: (e: UserModel) => void;
  loading: boolean;
  isLogged: boolean | null;
  error: string;
  signUp: (e: AuthModel) => void;
  signIn: (e: AuthModel) => void;
  signOut: () => void;
  getUser: () => void;
  setIsLogged: (e: boolean) => void;
}

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as UserModel);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLogged, setIsLogged] = useState<null | boolean>(null);

  const getUser = async () => {
    try {
      setLoading(true);
      const data = await AuthService.profile();
      setUser(data);
      setIsLogged(true);
    } catch (err) {
      console.log(err);
      setIsLogged(false);
      setUser({} as UserModel);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: AuthModel) => {
    try {
      setLoading(true);
      const { access_token } = await AuthService.signUp(data);
      AuthService.setToken(access_token);
      await getUser();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: AuthModel) => {
    try {
      setLoading(true);
      const { access_token } = await AuthService.signIn(data);
      AuthService.setToken(access_token);
      await getUser();
    } catch (err: any) {
      setError(err.message);
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
        isLogged,
        error,
        signUp,
        signIn,
        signOut,
        getUser,
        setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
