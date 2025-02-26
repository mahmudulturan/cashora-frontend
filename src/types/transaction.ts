import { IUser } from "./user";

export interface ITransaction extends Document {
    _id: string;
    sender: string | IUser;
    receiver: string | IUser;
    amount: number;
    fees: ITransactionFees;
    note?: string;
    type: 'send_money' | 'cash_in' | 'cash_out' | 'agent_recharge' | 'agent_withdraw';
    createdAt: Date;
    updatedAt: Date;
}

export interface ITransactionFees {
    transactionFee: number;
    adminFee: number;
    agentCommission: number;
}

export interface ITransactionPayload {
    receiver: string;
    amount: number;
    note?: string;
}