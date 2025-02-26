import { FC, useState } from 'react';
import ManageUsersTable from './components/manage-users-table';
import UserSearchFilter from './components/user-search-filter';
const ManageUsersPage: FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [status, setStatus] = useState<'all' | 'active' | 'blocked'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="wrapper space-y-6">
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
            />
            <ManageUsersTable showBalance={showBalance} />
        </div>
    );
};

export default ManageUsersPage;