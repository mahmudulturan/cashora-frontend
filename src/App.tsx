import { FC } from 'react';
import AuthLayout from './layout/auth-layout';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import LoginPage from './pages/auth/login/login-page';
import RegisterPage from './pages/auth/register/register-page';
import RootLayout from './layout/root-layout';
import HomePage from './pages/root/home/home-page';
import SendMoneyPage from './pages/root/send-money/send-money-page';
import AdminPage from './pages/root/admin/admin-page';
const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="send-money" element={<SendMoneyPage />} />
        <Route path="about" element={<div>About</div>} />
      </Route>

      <Route path="admin" element={<AdminPage />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
