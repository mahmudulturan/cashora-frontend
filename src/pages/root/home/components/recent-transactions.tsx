import Loading from '@/components/shared/loading';
import { ITransaction } from '@/types/transaction';
import { IUser } from '@/types/user';
import formatDate from '@/utils/formatDate';
import { Activity } from 'lucide-react';
import { FC } from 'react';

interface IRecentTransactionsProps {
    isLoading: boolean;
    transactions: ITransaction[] | undefined;
}


const RecentTransactions: FC<IRecentTransactionsProps> = ({ isLoading, transactions }) => {

    if (isLoading) {
        return <Loading className='h-[30vh]' />;
    }

    return (
        <section className="card-white p-6">
            {
                transactions && transactions.length > 0 ? (
                    <>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Activity className="w-6 h-6" />
                            Recent Transactions</h2>
                        <div className="space-y-4">
                            {transactions.map((transaction) => {
                                const receiver = transaction.receiver as IUser;
                                const sender = transaction.sender as IUser;
                                return (
                                    <div key={transaction._id} className="card-white p-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold">{transaction.type === 'send_money' ? 'Send Money' : transaction.type === 'cash_out' ? 'Cash Out' : transaction.type === 'cash_in' ? 'Cash In' : 'Agent Recharge'}</p>
                                                <p className="text-sm">To: {receiver.phone}</p>
                                                <p className="text-sm">From: {sender.phone}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">৳ {transaction.amount}</p>
                                                <p className="text-sm">{formatDate(transaction.createdAt.toString())}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <div className='text-xl font-bold'>No transactions found</div>
                )
            }
        </section>
    );
};

export default RecentTransactions;