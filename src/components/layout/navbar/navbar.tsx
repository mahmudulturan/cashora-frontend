import { Button } from '@/components/ui/button';
import { Bell, ChevronDown, Eye, EyeOff, LogOut, Wallet } from 'lucide-react';
import { User } from 'lucide-react';
import { FC, useState } from 'react';
import useOutsideClick from '@/hooks/outside-click.hook';
import { useAuth } from '@/providers/auth-provider';
import { logoutUser } from '@/services/auth';
import { useNavigate } from 'react-router';
import { toast } from '@/hooks/use-toast';


const Navbar: FC = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showBalance, setShowBalance] = useState(false);
    const userMenuRef = useOutsideClick(() => setShowUserMenu(false), showUserMenu);

    const { user, setUser, setIsAuthenticated } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const data = await logoutUser();
            if (data.success) {
                toast({
                    title: data.message
                });
                setUser(null);
                setIsAuthenticated(false);
                navigate('/login');
            }
        } catch (error: any) {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            });
        }
    }

    return (
        <nav className="card-white border-b-[3px] border-black p-0 mb-8">
            <div className="wrapper flex items-center justify-between">
                {/* User Info Section */}
                <div className="flex items-center">
                    <div className="card-yellow p-4 border-r-[3px] border-black">
                        <div className="w-10 h-10 rounded-full bg-white border-[3px] border-black flex items-center justify-center">
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="relative" ref={userMenuRef}>
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-2 px-4 py-4 hover:bg-black/5"
                        >
                            <div>
                                <p className="font-bold">{user?.name.fullName}</p>
                                <p className="text-xs">{user?.phone}</p>
                            </div>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {showUserMenu && (
                            <div className="absolute top-full left-0 card-white w-48 py-2">
                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>Profile</span>
                                </button>
                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                    <LogOut className="w-4 h-4" />
                                    <span onClick={handleLogout}>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Balance Section */}
                <div className="flex items-center">
                    <div className="flex items-center gap-2 px-6 py-4">
                        <Wallet className="w-5 h-5" />
                        <div>
                            <p className="text-xs font-medium">Your Balance</p>
                            <p className="font-bold">
                                {showBalance ? '৳ 12,500.00' : '৳ ••••••'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={"neutral"}
                            onClick={() => setShowBalance(!showBalance)}
                            className="p-4"
                        >
                            {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </Button>

                        <Button className="p-4">
                            <Bell className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;