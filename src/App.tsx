import { FC } from 'react';
import AuthLayout from './layout/AuthLayout';
import { Route } from 'react-router';
import { Routes } from 'react-router';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path="about" element={<div>About</div>} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<div>Login</div>} />
        <Route path="register" element={<div>Register</div>} />
      </Route>
    </Routes>
  );
};

export default App;
