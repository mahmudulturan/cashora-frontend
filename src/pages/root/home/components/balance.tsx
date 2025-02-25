import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { FC } from 'react';

interface IBalanceProps {
    showBalance: boolean;
    setShowBalance: (showBalance: boolean) => void;
}

const Balance: FC<IBalanceProps> = ({ showBalance, setShowBalance }) => {
    return (
        <section className="card-yellow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Your Balance</h2>
                <Button
                    onClick={() => setShowBalance(!showBalance)}
                    className="flex items-center gap-2"
                >
                    {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showBalance ? 'Hide' : 'Show'}
                </Button>
            </div>
            <p className="text-4xl font-bold mb-2">
                {showBalance ? '৳ 12,500.00' : '৳ ••••••'}
            </p>
            <p className="text-sm">Last updated: 2 minutes ago</p>
        </section>
    );
};

export default Balance;