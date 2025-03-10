import Logo from '@/components/shared/logo';
import { useLogoutUser } from '@/hooks/auth.hook';
import { Building2, ChevronLeft, LayoutDashboard, LogOut, LucideIcon, Menu, Receipt, Send, Users } from 'lucide-react';
import { FC } from 'react';
import { Link, NavLink } from 'react-router';


interface ISidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen: boolean) => void;
}


const Sidebar: FC<ISidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const SidebarLink = ({ icon: Icon, label, to }: { icon: LucideIcon; label: string; to: string }) => (
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

    const { handleLogout, isPending } = useLogoutUser();

    return (
        <>
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-0 hidden lg:block lg:w-20'
                    } bg-white border-r-[3px] border-black transition-all duration-300  flex flex-col h-screen fixed md:sticky top-0 z-50 `}
            >
                <div className={`p-4 border-b-[3px] bg-main border-black flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
                    <div className={`flex items-center gap-3 ${!sidebarOpen && 'hidden'}`}>
                        <Link to="/dashboard/admin" className='flex items-center gap-2'>
                            <Logo size='sm' />
                        </Link>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-black/5 rounded-lg hidden lg:block"
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
                </nav>
                <div className="p-4 border-t-[3px] border-black">
                    <button
                        onClick={handleLogout}
                        disabled={isPending}
                        className="w-full flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 transition-colors rounded-lg">
                        <LogOut className="w-5 h-5" />
                        <span className={`font-medium ${!sidebarOpen && 'hidden'}`}>Logout</span>
                    </button>
                </div>

            </aside>
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-200 rounded-lg fixed top-4 right-4 z-50 lg:hidden"
            >
                {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </>
    );
};

export default Sidebar;