import Pagination from '@/components/ui/pagination';
import TransactionsTable from '@/pages/dashboard/transactions/components/transactions-table';
import { FC, useState } from 'react';
import { useGetMyTransactions } from '@/hooks/transaction.hook';
import { useSearchParams } from 'react-router';

const MyTransactionsPage: FC = () => {
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
    const query = `page=${currentPage}&limit=10`;
    const { data: transactions, isLoading } = useGetMyTransactions(query);

    return (
        <div className="wrapper space-y-6 h-[calc(100vh-126px)] relative">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-xl md:text-3xl font-bold">My Transactions</h1>
            </div>
            <TransactionsTable loading={isLoading} transactions={transactions?.data.result} />
            <div>
                <div className='absolute bottom-4 left-0 right-0'>
                    <Pagination
                        meta={transactions?.data.meta}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyTransactionsPage;