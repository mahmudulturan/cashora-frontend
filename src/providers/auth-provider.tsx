import { useGetCurrentUser } from '@/hooks/user.hook';
import { getUser } from '@/services/user';
import { IUser } from '@/types/user';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react';
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

    const { data: userData } = useGetCurrentUser();

    useEffect(() => {
        setIsAuthenticating(true);
        if (userData?.success) {
            setUser(userData.data);
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
        setIsAuthenticating(false);
    }, [userData]);



    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, isAuthenticating, setIsAuthenticating }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;