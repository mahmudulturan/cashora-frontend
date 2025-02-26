import { Button } from '@/components/ui/button';
import { ArrowDownToLine, ArrowUpFromLine, History, Send } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router';

const AgentQuickActions: FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="card-white p-6">
                <Send className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cash In</h3>
                <p className="mb-4">Transfer money to a user's account instantly</p>
                <Link to="/cash-in">
                    <Button className="w-full">Cash In</Button>
                </Link>
            </div>

            <div className="card-white p-6">
                <ArrowUpFromLine className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cash Request</h3>
                <p className="mb-4">Request cash from admin when you need more funds</p>
                <Link to="/cash-request">
                    <Button className="w-full">Request Cash</Button>
                </Link>
            </div>

            <div className="card-white p-6">
                <ArrowDownToLine className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Withdraw Request</h3>
                <p className="mb-4">Request to withdraw excess funds to admin account</p>
                <Link to="/withdraw-request">
                    <Button className="w-full">Request Withdraw</Button>
                </Link>
            </div>

            <div className="card-white p-6">
                <History className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">History</h3>
                <p className="mb-4">View your last 90 transaction history from your account</p>
                <Link to="/transactions">
                    <Button className="w-full">View History</Button>
                </Link>
            </div>
        </section>
    );
};

export default AgentQuickActions;