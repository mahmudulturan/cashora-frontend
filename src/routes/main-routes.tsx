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
import ErrorPage from '@/pages/error/error-page';
import MyTransactionsPage from '@/pages/root/my-transactions/my-transactions-page';
import CashOutPage from '@/pages/root/cash-out/cash-out-page';
import CashInPage from '@/pages/root/cash-in/cash-in-page';

const MainRoutes: FC = () => {
  return (
    <Routes>
      {/* Public Routes (Only for non-authenticated users) */}
      <Route element={<GuestGuard><AuthLayout /></GuestGuard>}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Regular User Routes */}
      <Route element={<AuthGuard allowedRoles={['user', 'agent']}><RootLayout /></AuthGuard>}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoneyPage />} />
        <Route path="cash-out" element={<CashOutPage />} />
        <Route path="cash-in" element={<CashInPage />} />
        <Route path="my-transactions" element={<MyTransactionsPage />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<AuthGuard allowedRoles={['admin']}><DashboardLayout /></AuthGuard>}>
        <Route path="dashboard">
          <Route path="admin" element={<AdminPage />} />
          <Route path="manage-users" element={<ManageUsersPage />} />
          <Route path="manage-agents" element={<ManageAgentPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
