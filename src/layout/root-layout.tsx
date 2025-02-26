import { FC } from 'react';
import Navbar from '@/components/layout/navbar/navbar';
import { Outlet } from 'react-router';

const RootLayout: FC = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default RootLayout;