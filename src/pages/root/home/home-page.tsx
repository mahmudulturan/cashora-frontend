import { FC, useState } from 'react';
import Balance from './components/balance';
import UserQuickActions from './components/user-quick-actions';
import RecentTransactions from './components/recent-transactions';

const HomePage: FC = () => {
    const [showBalance, setShowBalance] = useState(false);
    return (
        <main className="wrapper space-y-8 pb-8">
            <Balance showBalance={showBalance} setShowBalance={setShowBalance} />
            <UserQuickActions />
            <RecentTransactions />
        </main>
    );
};

export default HomePage;