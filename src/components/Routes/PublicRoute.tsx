import { Navigate, Outlet } from "react-router-dom";
import { URL_HOME } from "../../constants/clientUrl";
import { useAuth } from "../../utils/hooks/useAuth";

export const PublicRoute = () => {
  const { user } = useAuth();

  if (!!Object.keys(user).length) return <Navigate to={URL_HOME} />;

  return <Outlet />;
};
