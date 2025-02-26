import Logo from '@/components/shared/logo';
import { Building2, ChevronLeft, HelpCircle, LayoutDashboard, LogOut, Menu, Receipt, Send, Settings, UserCog, Users } from 'lucide-react';
import { FC } from 'react';
import { NavLink } from 'react-router';


interface ISidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen: boolean) => void;
}


const Sidebar: FC<ISidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const SidebarLink = ({ icon: Icon, label, to }: { icon: React.ElementType; label: string; to: string }) => (
        <NavLink 
            to={to} 
            className={({ isActive }) => `
                w-full flex items-center gap-3 px-3 py-3 transition-colors rounded-lg
                ${isActive ? 'bg-black/10 text-black' : 'text-gray-700 hover:bg-black/5'}
            `}
        >
            <Icon className="w-5 h-5" />
            <span className={`font-medium ${!sidebarOpen && 'hidden'}`}>{label}</span>
        </NavLink>
    );
    return (
        <aside
            className={`${sidebarOpen ? 'w-64' : 'w-20'
                } bg-white border-r-[3px] border-black transition-all duration-300 flex flex-col h-screen sticky top-0`}
        >
            <div className={`p-4 border-b-[3px] border-black flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
                <div className={`flex items-center gap-3 ${!sidebarOpen && 'hidden'}`}>
                    <Logo size='sm' />
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-black/5 rounded-lg"
                >
                    {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <SidebarLink icon={LayoutDashboard} label="Dashboard" to="/dashboard/admin" />
                <SidebarLink icon={Users} label="Users" to="/dashboard/manage-users" />
                <SidebarLink icon={Building2} label="Agents" to="/dashboard/manage-agents" />
                <SidebarLink icon={Send} label="Transactions" to="/dashboard/transactions" />
                <SidebarLink icon={Receipt} label="Reports" to="/dashboard/reports" />
                <SidebarLink icon={UserCog} label="Admin Users" to="/dashboard/admin-users" />
                <SidebarLink icon={Settings} label="Settings" to="/dashboard/settings" />
                <SidebarLink icon={HelpCircle} label="Help & Support" to="/dashboard/help-support" />
            </nav>
            <div className="p-4 border-t-[3px] border-black">
                <button className="w-full flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 transition-colors rounded-lg">
                    <LogOut className="w-5 h-5" />
                    <span className={`font-medium ${!sidebarOpen && 'hidden'}`}>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;