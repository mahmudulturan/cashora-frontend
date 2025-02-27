import formatAmount from '@/utils/formatAmount';
import { Wallet, ArrowUpRight, CircleDollarSign, Activity, BarChart3, ArrowDownRight, Users, UserCheck, UserX, Shield, Clock } from 'lucide-react';
import { FC } from 'react';
import { IAdminStats } from '@/types/stats';
interface IAdminStatsProps {
    showAmounts: boolean;
    stats: IAdminStats | undefined;
}

const AdminStats: FC<IAdminStatsProps> = ({ showAmounts, stats }) => {



    return (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* System Money */}
                <div className="card-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <Wallet className="w-6 h-6 text-green-800" />
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Total Money in System</p>
                    <p className="text-2xl font-bold">
                        {showAmounts ? formatAmount(stats?.totalSystemMoney || 0) : '••••••'}
                    </p>
                </div>

                {/* Admin Income */}
                <div className="card-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <CircleDollarSign className="w-6 h-6 text-yellow-800" />
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Admin Income</p>
                    <p className="text-2xl font-bold">
                        {showAmounts ? formatAmount(stats?.adminIncome || 0) : '••••••'}
                    </p>
                </div>

                {/* Today's Transactions */}
                <div className="card-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <Activity className="w-6 h-6 text-blue-800" />
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Today's Transactions</p>
                    <p className="text-2xl font-bold">{stats?.todayTransactions}</p>
                </div>

                {/* Today's Volume */}
                <div className="card-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <BarChart3 className="w-6 h-6 text-purple-800" />
                        </div>
                        <ArrowDownRight className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Today's Volume</p>
                    <p className="text-2xl font-bold">
                        {showAmounts ? formatAmount(stats?.todayVolume || 0) : '••••••'}
                    </p>
                </div>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Users Stats */}
                <div className="card-white p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Users Overview</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-gray-600" />
                                <span>Total Users</span>
                            </div>
                            <span className="font-bold">{stats?.usersOverview.totalUsers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-green-600" />
                                <span>Active Users</span>
                            </div>
                            <span className="font-bold">{stats?.usersOverview.activeUsers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <UserX className="w-5 h-5 text-red-600" />
                                <span>Blocked Users</span>
                            </div>
                            <span className="font-bold">{stats?.usersOverview.blockedUsers}</span>
                        </div>
                    </div>
                </div>

                {/* Agents Stats */}
                <div className="card-white p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Agents Overview</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-gray-600" />
                                <span>Total Agents</span>
                            </div>
                            <span className="font-bold">{stats?.agentsOverview.totalAgents}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-green-600" />
                                <span>Active Agents</span>
                            </div>
                            <span className="font-bold">{stats?.agentsOverview.activeAgents}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-yellow-600" />
                                <span>Pending Approval</span>
                            </div>
                            <span className="font-bold">{stats?.agentsOverview.pendingApproval}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminStats;