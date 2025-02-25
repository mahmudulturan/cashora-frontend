import { FC, useState } from 'react';
import Balance from './components/balance';
import UserQuickActions from './components/user-quick-actions';
const HomePage: FC = () => {
    const [showBalance, setShowBalance] = useState(false);
    return (
        <main className="wrapper space-y-8">
            <Balance showBalance={showBalance} setShowBalance={setShowBalance} />
            <UserQuickActions />
        </main>
    );
};

export default HomePage;