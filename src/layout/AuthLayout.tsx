import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { Outlet } from 'react-router';
const AuthLayout: FC = () => {
    return (
        <div>
            <Button>Click me</Button>
            <h1 className='text-red-500'>Hello</h1>
            <Outlet />
        </div>
    );
};

export default AuthLayout;