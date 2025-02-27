import axiosInstance from "@/lib/axiosInstances";
import { IResponseWithPaginationData } from "@/types/response";
import { ITransaction, ITransactionPayload } from "@/types/transaction";

type TTransactionMutation = (data: ITransactionPayload) => Promise<IResponseWithPaginationData<ITransaction>>;

export const sendMoney: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transaction/send-money', data);
    return response.data;
}

export const cashOut: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transaction/cash-out', data);
    return response.data;
}

export const cashIn: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transaction/cash-in', data);
    return response.data;
}


export const getMyTransactions = async (query: string) => {
    const response = await axiosInstance.get(`/transaction/history?populate=sender,receiver&${query}`);
    return response.data;
}

export const getAllTransactions = async (query: string) => {
    const response = await axiosInstance.get(`/transaction/all-history?populate=sender,receiver&${query}`);
    return response.data;
}



