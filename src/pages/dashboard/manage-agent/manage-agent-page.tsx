import { FC, useState } from 'react';
import Pagination from '../../../components/ui/pagination';
import UserSearchFilter from '../components/shared/user-search-filter';
import ManageUsersTable from '../components/shared/manage-users-table';
import { useGetAllUsers } from '@/hooks/user.hook';

const ManageAgentPage: FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [status, setStatus] = useState<'all' | 'active' | 'blocked'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const query = `page=${currentPage}&limit=10&role=agent${searchTerm ? `&search=${searchTerm}` : ''}${status !== 'all' ? `&status=${status}` : ''}`;
    const { data, isLoading: isLoadingUsers } = useGetAllUsers(query);

    return (
        <div className="wrapper space-y-6 h-[calc(100vh-48px)] relative">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-3xl font-bold">Manage Agents</h1>
            </div>
            <UserSearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterStatus={status}
                setFilterStatus={setStatus}
                showBalance={showBalance}
                setShowBalance={setShowBalance}
                type="agent"
            />
            <ManageUsersTable isLoading={isLoadingUsers} showBalance={showBalance} users={data?.data.result} />
            <div className='h-10'>
                <div className='absolute bottom-0 left-0 right-0'>
                    <Pagination
                        meta={data?.data.meta}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageAgentPage;