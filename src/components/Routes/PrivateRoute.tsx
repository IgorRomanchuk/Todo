import { Navigate, Outlet } from "react-router-dom";
import { URL_REGISTER } from "../../constants/clientUrl";
import { useAuth } from "../../utils/hooks/useAuth";

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (Object.keys(user).length === 0) return <Navigate to={URL_REGISTER} />;

  return <Outlet />;
};

