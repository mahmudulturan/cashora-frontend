import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { registerUser, loginUser, logoutUser } from "@/services/auth";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/auth-provider";
import { useNavigate } from "react-router";

export const useRegisterUser = () => {
    const { setIsAuthenticated, setUser } = useAuth();
    return useMutation({
        mutationFn: async (data: any) => await registerUser(data),
        onSuccess: (data) => {
            toast({
                title: "Registration successful."
            });
            setIsAuthenticated(true);
            setUser(data.data);
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            });
        }
    })
}


export const useLoginUser = () => {
    const { setIsAuthenticated, setUser } = useAuth();
    return useMutation({
        mutationFn: async (data: any) => await loginUser(data),
        onSuccess: (data) => {
            toast({
                title: "Login successful."
            });
            setIsAuthenticated(true);
            setUser(data.data);
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            });
        }
    })
}

export const useLogoutUser = () => {
    const [isPending, setIsPending] = useState(false);
    const { setUser, setIsAuthenticated } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsPending(true);
        try {
            const data = await logoutUser();
            if (data.success) {
                toast({
                    title: data.message
                });
                setUser(null);
                setIsAuthenticated(false);
                navigate('/login');
            }
        } catch (error: any) {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            });
        } finally {
            setIsPending(false);
        }
    }

    return { handleLogout, isPending };
}

export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return auth;
}
