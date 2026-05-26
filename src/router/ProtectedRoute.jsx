import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
