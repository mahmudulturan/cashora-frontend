import { FC } from 'react';
import UserQuickActions from './components/user-quick-actions';
import RecentTransactions from './components/recent-transactions';
import { useAuth } from '@/hooks/auth.hook';
import AgentQuickActions from './components/agent-quick-actions';

const HomePage: FC = () => {
    const { user } = useAuth();
    return (
        <main className="wrapper space-y-8 pb-8">
            {user?.role === 'user' && <UserQuickActions />}
            {user?.role === 'agent' && <AgentQuickActions />}
            <RecentTransactions />
        </main>
    );
};

export default HomePage;