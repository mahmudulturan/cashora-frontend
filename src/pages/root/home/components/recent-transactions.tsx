import { FC } from 'react';

const RecentTransactions: FC = () => {
    return (
        <section className="card-white p-6">
            <h2 className="text-xl font-bold mb-6">Recent Transactions</h2>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card-white p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold">Send Money</p>
                                <p className="text-sm">To: 01712345678</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold">৳ 500.00</p>
                                <p className="text-sm">2 hours ago</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentTransactions;