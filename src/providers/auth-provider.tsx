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
    

    useEffect(() => {
        setIsAuthenticating(true);
        const fetchUser = async () => {
            try {
                const data = await getUser();
                if (data.success) {
                    setUser(data.data);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
            } finally {
                setIsAuthenticating(false);
            }
        }
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, isAuthenticating, setIsAuthenticating }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;