import { FC, useState } from 'react';
import ManageUsersTable from './components/manage-users-table';
const ManageUsersPage: FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    
    return (
        <div className="wrapper space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-3xl font-bold">Manage Users</h1>
            </div>
            <ManageUsersTable showBalance={showBalance} />
        </div>
    );
};

export default ManageUsersPage;