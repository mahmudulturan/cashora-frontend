import { FC } from 'react';
import { Outlet } from 'react-router';
const AuthLayout: FC = () => {
    return (
        <div>
            Hi
            <Outlet />
        </div>
    );
};

export default AuthLayout;