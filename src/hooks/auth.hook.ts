import axiosInstance from "@/lib/axiosInstances";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: (data: any) => axiosInstance.post('/auth/register', data),
        onSuccess: (_data) => {
            toast({
                title: "User registration successful."
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


