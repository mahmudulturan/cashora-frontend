import { FC, useState } from 'react';
import Balance from './components/balance';
const HomePage: FC = () => {
    const [showBalance, setShowBalance] = useState(false);
    return (
        <main className="wrapper">
            <Balance showBalance={showBalance} setShowBalance={setShowBalance} />
        </main>
    );
};

export default HomePage;