import { FC } from 'react';
import UserQuickActions from './components/user-quick-actions';
import RecentTransactions from './components/recent-transactions';
import { useAuth } from '@/hooks/auth.hook';
import AgentQuickActions from './components/agent-quick-actions';
import { useGetMyTransactions } from '@/hooks/transaction.hook';

const HomePage: FC = () => {
    const { user } = useAuth();
    const { data: transactions, isLoading } = useGetMyTransactions('page=1&limit=3');
    
    return (
        <main className="wrapper space-y-8 pb-8">
            {user?.role === 'user' && <UserQuickActions />}
            {
                user?.role === 'agent' && (user?.status === 'pending' ?
                    <div className="card-white p-6">
                        <h3 className='text-2xl font-bold'>Your account is pending to be approved by admin.</h3>
                        <p className='text-gray-600'>Please wait for admin to approve your account.</p>
                    </div>
                    :
                    <AgentQuickActions />)
            }
            {
                user?.status !== 'pending' && <RecentTransactions isLoading={isLoading} transactions={transactions?.data.result} />
            }
        </main>
    );
};

export default HomePage;