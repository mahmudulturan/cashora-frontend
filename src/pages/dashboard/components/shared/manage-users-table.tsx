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
import { ArrowUpDown, Phone, Mail, Wallet, CheckCircle, Ban } from 'lucide-react';
import formatAmount from '@/utils/formatAmount';
import UpdateUserStatus from './update-user-status';
import { IUser } from '@/types/user';


interface IManageUsersTableProps {
    showBalance: boolean;
    users: IUser[];
}

const ManageUsersTable: FC<IManageUsersTableProps> = ({ showBalance, users }) => {


    return (
        <div style={{ minWidth: "100%", display: "table" }} className="card-white overflow-hidden">
            <div className="relative w-full max-h-[calc(100vh-310px)] overflow-auto">
                <Table className="w-full">
                    <TableHeader className="sticky top-0 z-20 bg-bg">
                        <TableRow>
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
                            <TableRow key={user._id} className="border-b border-black/10 hover:bg-gray-50">
                                <TableCell className="p-4">
                                    <div className="font-bold">{user.name.fullName}</div>
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
                                    {formatDate(user?.activeSession?.lastLogin?.toString() || 'N/A')}
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