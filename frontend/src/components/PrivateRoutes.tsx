import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
const PrivateRoutes = () => {
  const {
    state: { user },
  } = useAuthContext();

  console.log(user);

  return user?.ACCESS_TOKEN ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
