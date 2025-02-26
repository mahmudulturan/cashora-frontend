import { FC } from 'react';
import UserQuickActions from './components/user-quick-actions';
import RecentTransactions from './components/recent-transactions';
const HomePage: FC = () => {
    return (
        <main className="wrapper space-y-8 pb-8">
            <UserQuickActions />
            <RecentTransactions />
        </main>
    );
};

export default HomePage;