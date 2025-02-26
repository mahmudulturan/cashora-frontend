import { FC, useState } from 'react';
import TransactionsTable from './components/transactions-table';
import Pagination from '@/components/ui/pagination';

const TransactionsPage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, _setTotalPages] = useState(3);

    return (
        <div className="wrapper space-y-6 h-[calc(100vh-48px)] relative">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-3xl font-bold">Transactions</h1>
            </div>
            <TransactionsTable  transactions={[]}/>
            <div>
                <div className='absolute bottom-0 left-0 right-0'>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default TransactionsPage;