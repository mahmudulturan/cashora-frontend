import { IUser } from '@/types/user';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from 'react';

interface IAuthContext {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    isAuthenticating: boolean;
    setIsAuthenticating: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, isAuthenticating, setIsAuthenticating }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return auth;
}

