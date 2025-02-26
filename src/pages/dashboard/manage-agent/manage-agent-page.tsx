import { FC, useState } from 'react';
import Pagination from '../../../components/ui/pagination';
import UserSearchFilter from '../components/shared/user-search-filter';
import ManageUsersTable from '../components/shared/manage-users-table';
import { IUser } from '@/types/user';

const ManageAgentPage: FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [status, setStatus] = useState<'all' | 'active' | 'blocked'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, _setTotalPages] = useState(5);


    const users: IUser[] = [
        {
            _id: '1',
            name: {
                firstName: 'John',
                lastName: 'Doe',
                fullName: 'John Doe'
            },
            email: 'john@example.com',
            phone: '+1234567890',
            pin: '1234',
            nid: 'NID123',
            role: 'user',
            balance: 5000,
            income: 1000,
            status: 'active',
            activeSession: {
                token: 'token123',
                lastLogin: new Date('2024-01-15'),
                deviceInfo: 'Chrome Windows',
                lastDevice: 'Desktop'
            },
            isLoggedIn: true,
            isDeleted: false,
            createdAt: new Date('2023-12-01'),
            updatedAt: new Date('2024-01-15')
        },
        {
            _id: '2',
            name: {
                firstName: 'Jane',
                lastName: 'Smith',
                fullName: 'Jane Smith'
            },
            email: 'jane@example.com',
            phone: '+1987654321',
            pin: '4321',
            nid: 'NID456',
            role: 'user',
            balance: 3000,
            income: 500,
            status: 'blocked',
            activeSession: {
                token: 'token456',
                lastLogin: new Date('2024-01-10'),
                deviceInfo: 'Safari iOS',
                lastDevice: 'Mobile'
            },
            isLoggedIn: false,
            isDeleted: false,
            createdAt: new Date('2023-11-15'),
            updatedAt: new Date('2024-01-10')
        },
        {
            _id: '3',
            name: {
                firstName: 'Alice',
                lastName: 'Johnson',
                fullName: 'Alice Johnson'
            },
            email: 'alice@example.com',
            phone: '+1122334455',
            pin: '5678',
            nid: 'NID789',
            role: 'user',
            balance: 7500,
            income: 2000,
            status: 'pending',
            activeSession: {
                token: 'token789',
                lastLogin: new Date('2024-01-12'),
                deviceInfo: 'Firefox Mac',
                lastDevice: 'Desktop'
            },
            isLoggedIn: true,
            isDeleted: false,
            createdAt: new Date('2023-12-15'),
            updatedAt: new Date('2024-01-12')
        }
    ]


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
            <ManageUsersTable showBalance={showBalance} users={users} />
            <div className='h-10'>
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

export default ManageAgentPage;