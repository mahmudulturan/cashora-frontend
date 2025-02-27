import { sendMoney, cashOut, cashIn, getMyTransactions, getAllTransactions } from "@/services/transaction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { ITransaction, ITransactionPayload } from "@/types/transaction";
import { IResponseWithPaginationData } from "@/types/response";

export const useSendMoney = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['send-money'],
        mutationFn: async (data: ITransactionPayload) => await sendMoney(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            });
            queryClient.invalidateQueries({ queryKey: ['my-transactions'] });
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message
            })
        }
    })
}


export const useCashOut = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['cash-out'],
        mutationFn: async (data: ITransactionPayload) => await cashOut(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            });
            queryClient.invalidateQueries({ queryKey: ['my-transactions'] });
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message
            })
        }
    })
}


export const useCashIn = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['cash-in'],
        mutationFn: async (data: ITransactionPayload) => await cashIn(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            });
            queryClient.invalidateQueries({ queryKey: ['my-transactions'] });
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message
            })
        }
    })
}


export const useGetMyTransactions = (query: string) => {
    return useQuery({
        queryKey: ['my-transactions', query],
        queryFn: async (): Promise<IResponseWithPaginationData<ITransaction[]>> => await getMyTransactions(query)
    })
}

export const useGetAllTransactions = (query: string) => {
    return useQuery({
        queryKey: ['all-transactions', query],
        queryFn: async (): Promise<IResponseWithPaginationData<ITransaction[]>> => await getAllTransactions(query)
    })
}
