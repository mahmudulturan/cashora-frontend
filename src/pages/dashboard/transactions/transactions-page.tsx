import { FC, useState } from 'react';
import TransactionsTable from './components/transactions-table';
import Pagination from '@/components/ui/pagination';
import { useGetAllTransactions } from '@/hooks/transaction.hook';
import { useSearchParams } from 'react-router';

const TransactionsPage: FC = () => {
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);

    const { data, isLoading } = useGetAllTransactions(`page=${currentPage}&limit=10`);

    return (
        <div className="wrapper space-y-6 h-[calc(100vh-48px)] relative">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-xl md:text-3xl font-bold">Transactions</h1>
            </div>
            <TransactionsTable size='lg' loading={isLoading} transactions={data?.data.result} />
            <div>
                <div className='absolute bottom-0 left-0 right-0'>
                    <Pagination
                        meta={data?.data.meta}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default TransactionsPage;