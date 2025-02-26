import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../shared/loading';
import { useAuth } from '@/hooks/auth.hook';

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
    const { isAuthenticated, isAuthenticating } = useAuth();
    const location = useLocation();

    if (isAuthenticating) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default AuthGuard; 