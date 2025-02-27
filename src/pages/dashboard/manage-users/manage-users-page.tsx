import { FC, useState } from 'react';
import ManageUsersTable from '../components/shared/manage-users-table';
import UserSearchFilter from '../components/shared/user-search-filter';
import Pagination from '../../../components/ui/pagination';
import { useGetAllUsers } from '@/hooks/user.hook';
import { useSearchParams } from 'react-router';

const ManageUsersPage: FC = () => {
    const [searchParams] = useSearchParams();
    const [showBalance, setShowBalance] = useState(true);
    const [status, setStatus] = useState<'all' | 'active' | 'blocked'>(searchParams.get('status') as 'all' | 'active' | 'blocked' || 'all');
    const [searchTerm, setSearchTerm] = useState(searchParams.get('searchKey') || '');
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
    const query = `page=${currentPage}&limit=10&role=user${searchTerm ? `&search=${searchTerm}` : ''}${status !== 'all' ? `&status=${status}` : ''}`;
    const { data, isLoading: isLoadingUsers } = useGetAllUsers(query);

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
                        meta={data?.data.meta}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageUsersPage;