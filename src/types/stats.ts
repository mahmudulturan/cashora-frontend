export interface IAdminStats {
    totalSystemMoney: number;
    adminIncome: number;
    todayTransactions: number;
    todayVolume: number;
    usersOverview: {
        totalUsers: number;
        activeUsers: number;
        blockedUsers: number;
    };
    agentsOverview: {
        totalAgents: number;
        activeAgents: number;
        pendingApproval: number;
    };
}


