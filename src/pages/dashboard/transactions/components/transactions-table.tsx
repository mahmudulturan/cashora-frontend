import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import formatDate from '@/utils/formatDate';
import { Phone, Mail, Wallet } from 'lucide-react';
import formatAmount from '@/utils/formatAmount';
import { ITransaction } from '@/types/transaction';
import { IUser } from '@/types/user';
import Loading from '@/components/shared/loading';


interface ITransactionsTableProps {
    transactions: ITransaction[] | undefined;
    loading: boolean;
    size?: 'sm' | 'lg';
}


const TransactionsTable: FC<ITransactionsTableProps> = ({ transactions, loading, size = 'sm' }) => {
    return (
        <div style={{ minWidth: "100%", display: "table" }} className="card-white overflow-hidden">
            <div className={`relative w-full overflow-auto ${size === 'lg' ? 'max-h-[calc(100vh-200px)]' : 'max-h-[calc(100vh-310px)]'}`}>
                {
                    loading ? <Loading className={`h-[${size === 'lg' ? 'calc(100vh-200px)' : 'calc(100vh-310px)'}`} />
                        :
                        <Table className="w-full">
                            <TableHeader className="sticky top-0 z-20 bg-bg">
                                <TableRow>
                                    <TableHead className="p-4 text-left">
                                        #
                                    </TableHead>
                                    <TableHead className="p-4 text-left">
                                        Sender
                                    </TableHead>
                                    <TableHead className="p-4 text-left">
                                        Receiver
                                    </TableHead>
                                    <TableHead className="p-4 text-left">
                                        Amount
                                    </TableHead>
                                    <TableHead className="p-4 text-left">
                                        Status
                                    </TableHead>
                                    <TableHead className="p-4 text-left">
                                        Date
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions?.map((transaction, index) => {
                                    const sender = transaction.sender as IUser;
                                    const receiver = transaction.receiver as IUser;

                                    return (
                                        <TableRow key={transaction._id} className="border-b border-black/10 hover:bg-gray-50">
                                            <TableCell className="p-4">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="p-4">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        {sender.phone}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="w-4 h-4" />
                                                        {sender.email}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-4">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        {receiver.phone}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="w-4 h-4" />
                                                        {receiver.email}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <Wallet className="w-4 h-4" />
                                                    {formatAmount(transaction.amount)}
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-4">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${transaction.type === 'send_money'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {transaction.type}
                                                </span>
                                            </TableCell>
                                            <TableCell className="p-4">
                                                {formatDate(transaction.createdAt.toString() || 'N/A')}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                }
            </div>
        </div >
    );
};

export default TransactionsTable;