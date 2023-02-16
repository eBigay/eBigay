import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

type RolesType = {
  allowedRoles?: Number[];
};

const PrivateRoutes = ({ allowedRoles }: RolesType) => {
  const { auth } = useAuthContext();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
