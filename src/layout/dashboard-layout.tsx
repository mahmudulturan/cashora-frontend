import { FC, useState } from 'react';
import Sidebar from '../components/layout/sidebar/sidebar';
import { Outlet } from 'react-router';
import useScreenSize from '@/hooks/screen-size.hook';
const DashboardLayout: FC = () => {
    const { screenSize } = useScreenSize();
    const [sidebarOpen, setSidebarOpen] = useState(screenSize.width >= 1024);

    return (
        <div className="lg:flex lg:min-h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 p-4 lg:p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;