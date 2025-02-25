import { FC } from 'react';
import Logo from '@/components/shared/logo';
import LoginForm from './components/login-form';

const LoginPage: FC = () => {
    return (
        <div className="w-full max-w-lg">
            <div className="text-center mb-8">
                <Logo />
                <p className="text-lg">Welcome back! Login to your account.</p>
            </div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;