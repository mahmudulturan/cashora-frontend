import AuthLayout from '@/layout/auth-layout';
import DashboardLayout from '@/layout/dashboard-layout';
import RootLayout from '@/layout/root-layout';
import LoginPage from '@/pages/auth/login/login-page';
import RegisterPage from '@/pages/auth/register/register-page';
import AdminPage from '@/pages/dashboard/admin/admin-page';
import ManageAgentPage from '@/pages/dashboard/manage-agent/manage-agent-page';
import ManageUsersPage from '@/pages/dashboard/manage-users/manage-users-page';
import TransactionsPage from '@/pages/dashboard/transactions/transactions-page';
import HomePage from '@/pages/root/home/home-page';
import SendMoneyPage from '@/pages/root/send-money/send-money-page';
import { FC } from 'react';
import { Route, Routes } from 'react-router';
import AuthGuard from '@/components/guards/auth-guard';
import GuestGuard from '@/components/guards/guest-guard';

const MainRoutes: FC = () => {
  return (
    <Routes>
      {/* Public Routes (Only for non-authenticated users) */}
      <Route element={<GuestGuard><AuthLayout /></GuestGuard>}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<AuthGuard><RootLayout /></AuthGuard>}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoneyPage />} />
        <Route path="about" element={<div>About</div>} />
      </Route>

      <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
        <Route path="dashboard">
          <Route path="admin" element={<AdminPage />} />
          <Route path="manage-users" element={<ManageUsersPage />} />
          <Route path="manage-agents" element={<ManageAgentPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
