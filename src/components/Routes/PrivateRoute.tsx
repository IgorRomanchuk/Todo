import { Navigate, Outlet } from "react-router-dom";
import { URL_REGISTER } from "../../constants/clientUrl";
import { useAuth } from "../../utils/hooks/useAuth";
import Loading from "../Loading";

export const PrivateRoute = () => {
  const { user, loading, isLogged } = useAuth();

  if (isLogged === null) return null;

  if (!isLogged || !user) return <Navigate to={URL_REGISTER} />;

  return loading ? <Loading /> : <Outlet />;
};
