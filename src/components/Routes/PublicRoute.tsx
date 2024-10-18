import { Navigate, Outlet } from "react-router-dom";
import { URL_HOME } from "src/constants/clientUrl";
import { useAuth } from "src/utils/hooks/useAuth";

export const PublicRoute = () => {
  const { isLogged } = useAuth();

  if (isLogged) return <Navigate to={URL_HOME} />;

  return <Outlet />;
};
