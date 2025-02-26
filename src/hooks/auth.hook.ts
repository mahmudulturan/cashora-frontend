import axiosInstance from "@/lib/axiosInstances";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: (data: any) => axiosInstance.post('/auth/register', data),
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
        mutationFn: (data: any) => axiosInstance.post('/auth/login', data),
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

