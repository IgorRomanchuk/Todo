import { router } from "./config";
import { RouterProvider } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useAuth } from "../../../utils/hooks/useAuth";

const Router = () => {
  const { loading } = useAuth();

  return loading ? <Loading /> : <RouterProvider router={router} />;
};

export default Router;
