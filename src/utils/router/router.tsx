import { useEffect, useState } from "react";
import { router } from "./config";
import { RouterProvider } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import AuthService from "../../service/auth.service";
import { useAuth } from "../hooks/useAuth";
import { UserModel } from "../../models/user.model";

const Router = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser, logged } = useAuth();

  const getUser = async () => {
    const token: string | null = AuthService.getToken();
    try {
      setLoading(true);
      const data = (await AuthService.profile(token)).data;
      setUser(data);
    } catch (err) {
      console.log(err);
      setUser({} as UserModel);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser()
  }, [logged]);

  return loading ? <Loading /> : <RouterProvider router={router} />;
};

export default Router;
