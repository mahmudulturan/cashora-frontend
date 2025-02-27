import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers, updateUserStatus } from "@/services/user";
import { toast } from "./use-toast";


export const useGetAllUsers = (query?: string) => {
    return useQuery({
        queryKey: ['users', query],
        queryFn: async () => await getAllUsers(query)
    });
}

export const useUpdateUserStatus = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationKey: ['updateUserStatus'],
        mutationFn: async (data: { userId: string, status: string }) => {
            return await updateUserStatus(data.userId, data.status);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ 
                queryKey: ['users']
            });
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message,
                variant: "destructive",
            });
        },
    });
}

