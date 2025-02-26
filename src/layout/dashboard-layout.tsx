import { FC, useState } from 'react';
import Sidebar from '../components/layout/sidebar/sidebar';
import { Outlet } from 'react-router';
const DashboardLayout: FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
    return (
        <div className="flex min-h-screen bg-[#FCFCF7]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;