import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../shared/loading';
import { useAuth } from '@/hooks/auth.hook';

interface AuthGuardProps {
    children: ReactNode;
    allowedRoles?: string[];
}

const AuthGuard: FC<AuthGuardProps> = ({ children, allowedRoles }) => {
    const { isAuthenticated, isAuthenticating, user } = useAuth();
    const location = useLocation();

    if (isAuthenticating) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check if user has the required role
    if (allowedRoles && (!user?.role || !allowedRoles.includes(user.role))) {
        return <Navigate to="/dashboard/admin" replace />;
    }

    return <>{children}</>;
};

export default AuthGuard; 