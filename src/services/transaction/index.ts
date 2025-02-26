import axiosInstance from "@/lib/axiosInstances";
import { IResponseWithData } from "@/types/response";
import { ITransaction, ITransactionPayload } from "@/types/transaction";

type TTransactionMutation = (data: ITransactionPayload) => Promise<IResponseWithData<IResponseWithData<ITransaction>>>;

export const sendMoney: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transactions/send-money', data);
    return response.data;
}

export const cashOut: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transactions/cash-out', data);
    return response.data;
}

export const cashIn: TTransactionMutation = async (data) => {
    const response = await axiosInstance.post('/transactions/cash-in', data);
    return response.data;
}
