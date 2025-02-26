import { useAuth } from '@/hooks/auth.hook';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';
import Loading from '../shared/loading';

interface GuestGuardProps {
    children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
    const { isAuthenticated, isAuthenticating } = useAuth();

    if (isAuthenticating) {
        return <Loading />;
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default GuestGuard; 