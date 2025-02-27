import { FC, useState } from 'react';
import ManageUsersTable from '../components/shared/manage-users-table';
import UserSearchFilter from '../components/shared/user-search-filter';
import Pagination from '../../../components/ui/pagination';
import { useGetAllUsers } from '@/hooks/user.hook';

const ManageUsersPage: FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [status, setStatus] = useState<'all' | 'active' | 'blocked'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, _setTotalPages] = useState(5);

    const { data, isLoading: isLoadingUsers } = useGetAllUsers();    

    return (
        <div className="wrapper space-y-6 h-[calc(100vh-48px)] relative">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-3xl font-bold">Manage Users</h1>
            </div>
            <UserSearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterStatus={status}
                setFilterStatus={setStatus}
                showBalance={showBalance}
                setShowBalance={setShowBalance}
                type="user"
            />
            <ManageUsersTable isLoading={isLoadingUsers} showBalance={showBalance} users={data?.data.result} />
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

export default ManageUsersPage;