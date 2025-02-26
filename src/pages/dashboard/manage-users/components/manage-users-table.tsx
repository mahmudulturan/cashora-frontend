import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import formatDate from '@/utils/formatDate';
import { ArrowUpDown, Phone, Mail, Wallet, Shield, CheckCircle, Ban } from 'lucide-react';
import formatAmount from '@/utils/formatAmount';
import UpdateUserStatus from './update-user-status';
interface User {
    id: string;
    name: string;
    phone: string;
    email: string;
    balance: number;
    type: string;
    status: 'active' | 'blocked' | 'pending';
    lastActive: string;
}

const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        phone: '01712345678',
        email: 'john@example.com',
        balance: 5000,
        type: 'user',
        status: 'active',
        lastActive: '2024-03-15T10:30:00Z',
    },
    {
        id: '2',
        name: 'Sarah Agent',
        phone: '01812345678',
        email: 'sarah@example.com',
        balance: 50000,
        type: 'agent',
        status: 'active',
        lastActive: '2024-03-15T11:45:00Z',
    },
    {
        id: '3',
        name: 'Mike Block',
        phone: '01912345678',
        email: 'mike@example.com',
        balance: 100,
        type: 'user',
        status: 'blocked',
        lastActive: '2024-03-14T09:15:00Z',
    },
    {
        id: '4',
        name: 'Mike Pending',
        phone: '01912345678',
        email: 'mike@example.com',
        balance: 100,
        type: 'user',
        status: 'pending',
        lastActive: '2024-03-14T09:15:00Z',
    },
];

interface IManageUsersTableProps {
    showBalance: boolean;
}

const ManageUsersTable: FC<IManageUsersTableProps> = ({ showBalance }) => {


    return (
        <div className="card-white overflow-hidden">
            <div className="overflow-x-auto">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="border-b-[3px] border-black">
                            <TableHead className="p-4 text-left">
                                <button
                                    className="flex items-center gap-2 font-bold hover:text-gray-600"
                                >
                                    Name
                                    <ArrowUpDown className="w-4 h-4" />
                                </button>
                            </TableHead>
                            <TableHead className="p-4 text-left">Contact</TableHead>
                            <TableHead className="p-4 text-left">
                                <button
                                    className="flex items-center gap-2 font-bold hover:text-gray-600"
                                >
                                    Balance
                                    <ArrowUpDown className="w-4 h-4" />
                                </button>
                            </TableHead>
                            <TableHead className="p-4 text-left">Type</TableHead>
                            <TableHead className="p-4 text-left">Status</TableHead>
                            <TableHead className="p-4 text-left">
                                <button
                                    className="flex items-center gap-2 font-bold hover:text-gray-600"
                                >
                                    Last Active
                                    <ArrowUpDown className="w-4 h-4" />
                                </button>
                            </TableHead>
                            <TableHead className="p-4 text-left">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="border-b border-black/10 hover:bg-gray-50">
                                <TableCell className="p-4">
                                    <div className="font-bold">{user.name}</div>
                                </TableCell>
                                <TableCell className="p-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            {user.phone}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            {user.email}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="p-4">
                                    <div className="flex items-center gap-2">
                                        <Wallet className="w-4 h-4" />
                                        {showBalance ? formatAmount(user.balance) : '••••••'}
                                    </div>
                                </TableCell>
                                <TableCell className="p-4">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4" />
                                        <span className="capitalize">{user.type}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="p-4">
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${user.status === 'active'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                        }`}>
                                        {user.status === 'active' ? (
                                            <CheckCircle className="w-4 h-4" />
                                        ) : (
                                            <Ban className="w-4 h-4" />
                                        )}
                                        {user.status}
                                    </span>
                                </TableCell>
                                <TableCell className="p-4">
                                    {formatDate(user.lastActive)}
                                </TableCell>
                                <TableCell className="p-4">
                                    <UpdateUserStatus status={user.status} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ManageUsersTable;