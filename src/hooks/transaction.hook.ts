import { sendMoney, cashOut, cashIn, getMyTransactions, getAllTransactions } from "@/services/transaction";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { ITransaction, ITransactionPayload } from "@/types/transaction";
import { IResponseWithPaginationData } from "@/types/response";

export const useSendMoney = () => {
    return useMutation({
        mutationFn: async (data: ITransactionPayload) => await sendMoney(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            })
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message
            })
        }
    })
}


export const useCashOut = () => {
    return useMutation({
        mutationFn: async (data: ITransactionPayload) => await cashOut(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            })
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message
            })
        }
    })
}


export const useCashIn = () => {
    return useMutation({
        mutationFn: async (data: ITransactionPayload) => await cashIn(data),
        onSuccess: (data) => {
            toast({
                title: data.message
            })
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

