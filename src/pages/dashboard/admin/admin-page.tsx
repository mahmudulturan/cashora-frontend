import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import formatAmount from '@/utils/formatAmount';
import { Activity, ArrowRight, Eye, EyeOff, Search } from 'lucide-react';
import { FC, useState } from 'react';
import AdminStats from './components/admin-stats';
import formatDate from '@/utils/formatDate';

interface Transaction {
    id: string;
    type: string;
    amount: number;
    fee: number;
    date: string;
    status: string;
    user: {
        name: string;
        phone: string;
    };
}

const AdminPage: FC = () => {
    const [showAmounts, setShowAmounts] = useState(false);
    const [searchKey, setSearchKey] = useState('');

    const recentTransactions: Transaction[] = [
        {
            id: '1',
            type: 'send_money',
            amount: 5000,
            fee: 5,
            date: '2024-03-15T10:30:00Z',
            status: 'completed',
            user: {
                name: 'John Doe',
                phone: '01712345678',
            },
        },
        {
            id: '2',
            type: 'cash_out',
            amount: 10000,
            fee: 150,
            date: '2024-03-15T09:45:00Z',
            status: 'completed',
            user: {
                name: 'Sarah Smith',
                phone: '01812345678',
            },
        },
        {
            id: '3',
            type: 'cash_in',
            amount: 20000,
            fee: 0,
            date: '2024-03-15T09:30:00Z',
            status: 'pending',
            user: {
                name: 'Mike Johnson',
                phone: '01912345678',
            },
        },
    ];


    const getTransactionColor = (type: Transaction['type']) => {
        switch (type) {
            case 'cash_in':
                return 'bg-green-100 text-green-800';
            case 'cash_out':
                return 'bg-red-100 text-red-800';
            case 'send_money':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status: Transaction['status']) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="wrapper space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button
                    onClick={() => setShowAmounts(!showAmounts)}
                    className="bg-white"
                >
                    {showAmounts ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </Button>
            </div>


            <AdminStats showAmounts={showAmounts} />

            {/* Recent Transactions */}
            <div className="card-white p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Activity className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Recent Transactions</h2>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-[3px] border-black">
                                <th className="p-4 text-left">User</th>
                                <th className="p-4 text-left">Type</th>
                                <th className="p-4 text-left">Amount</th>
                                <th className="p-4 text-left">Fee</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTransactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b border-black/10">
                                    <td className="p-4">
                                        <div>
                                            <div className="font-bold">{transaction.user.name}</div>
                                            <div className="text-sm text-gray-600">{transaction.user.phone}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTransactionColor(transaction.type)}`}>
                                            {transaction.type.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold">
                                        {showAmounts ? formatAmount(transaction.amount) : '••••••'}
                                    </td>
                                    <td className="p-4 font-bold">
                                        {showAmounts ? formatAmount(transaction.fee) : '••••••'}
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="p-4">{formatDate(transaction.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button className="bg-white flex items-center gap-2">
                        View All Transactions
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;