import { FC, useState } from 'react';
import UserQuickActions from './components/user-quick-actions';
import RecentTransactions from './components/recent-transactions';
import { useAuth } from '@/providers/auth-provider';
const HomePage: FC = () => {
    
    const [showBalance, setShowBalance] = useState(false);
    const { user } = useAuth();

    console.log(user);
    return (
        <main className="wrapper space-y-8 pb-8">
            <UserQuickActions />
            <RecentTransactions />
        </main>
    );
};

export default HomePage;