import { sendMoney, cashOut, cashIn } from "@/services/transaction";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { ITransactionPayload } from "@/types/transaction";

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