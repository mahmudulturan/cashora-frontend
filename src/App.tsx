import { FC } from 'react';
import AuthLayout from './layout/auth-layout';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import LoginPage from './pages/auth/login/login-page';
import RegisterPage from './pages/auth/register/register-page';
import RootLayout from './layout/root-layout';
import HomePage from './pages/root/home/home-page';
import SendMoneyPage from './pages/root/send-money/send-money-page';
import AdminPage from './pages/dashboard/admin/admin-page';
import DashboardLayout from './layout/dashboard-layout';
import TransactionsPage from './pages/dashboard/transactions/transactions-page';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoneyPage />} />
        <Route path="about" element={<div>About</div>} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="admin" element={<AdminPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
