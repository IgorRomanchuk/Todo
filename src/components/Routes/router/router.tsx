import { router } from "./config";
import { RouterProvider } from "react-router-dom";

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
