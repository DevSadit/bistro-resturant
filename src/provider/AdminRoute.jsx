import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [user, loading] = useContext(AuthContext);

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
