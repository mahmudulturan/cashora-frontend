import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { registerUser, loginUser } from "@/services/auth";

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