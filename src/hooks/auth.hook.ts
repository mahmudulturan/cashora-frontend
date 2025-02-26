import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { registerUser, loginUser } from "@/services/auth";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider";

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: async (data: any) => await registerUser(data),
        onSuccess: (_data) => {
            toast({
                title: "Registration successful."
            });
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
    return useMutation({
        mutationFn: async (data: any) => await loginUser(data),
        onSuccess: (_data) => {
            toast({
                title: "Login successful."
            });
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            });
        }
    })
}



export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return auth;
}
