import { Button } from '@/components/ui/button';
import { ArrowDownToLine, History, Send } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router';

const UserQuickActions: FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-pink rounded-lg p-6">
                <Send className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Send Money</h3>
                <p className="mb-4">Transfer money to another user account instantly</p>
                <Link to="/send-money">
                    <Button className="w-full">Send Now</Button>
                </Link>
            </div>

            <div className="card-white rounded-lg p-6">
                <ArrowDownToLine className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cash Out</h3>
                <p className="mb-4">Withdraw money from nearby agents from your account</p>
                <Button className="w-full">Cash Out</Button>
            </div>

            <div className="card-white rounded-lg p-6">
                <History className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">History</h3>
                <p className="mb-4">View your last 90 transaction history from your account</p>
                <Button className="w-full">View History</Button>
            </div>
        </section>
    );
};

export default UserQuickActions;