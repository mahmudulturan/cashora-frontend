import { FC } from 'react';
import AuthLayout from './layout/AuthLayout';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import LoginPage from './pages/auth/login/login-page';
import RegisterPage from './pages/auth/register/register-page';
import RootLayout from './layout/RootLayout';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
