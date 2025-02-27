import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { FC, useState } from 'react';
import AdminStats from './components/admin-stats';
import RecentTransactions from '@/pages/root/home/components/recent-transactions';
import { useGetAllTransactions } from '@/hooks/transaction.hook';


const AdminPage: FC = () => {
    const [showAmounts, setShowAmounts] = useState(false);
    const { data: transactions, isLoading } = useGetAllTransactions('page=1&limit=3');
    return (
        <div className="wrapper space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-8">
                <h1 className="text-xl md:text-3xl font-bold">Admin Dashboard</h1>
                <Button
                    onClick={() => setShowAmounts(!showAmounts)}
                    className="bg-white hidden lg:block"
                >
                    {showAmounts ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </Button>
            </div>


            <AdminStats showAmounts={showAmounts} />

            {/* Recent Transactions */}
            <RecentTransactions isLoading={isLoading} transactions={transactions?.data.result} />
        </div>
    );
};

export default AdminPage;