import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRole }) {
  const { currentUser, userRole } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/" replace />; // Or to a 'unauthorized' page
  }

  return children;
}
