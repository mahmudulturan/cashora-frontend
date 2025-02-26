import { FC } from 'react';
import Logo from '@/components/shared/logo';
import RegisterForm from './components/register-from';
const RegisterPage: FC = () => {
    return (
        <div className="w-full max-w-lg">
            <div className="text-center mb-8">
                <Logo />
                <p className="text-lg">Create an account to get started.</p>
                <div className="card-yellow rounded-lg p-4 mt-1">
                    <p className="font-bold">Get ৳40 Bonus on Registration! 🎉</p>
                </div>
            </div>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;