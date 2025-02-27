import { Button } from '@/components/ui/button';
import { ArrowDownToLine, Bell, ChevronDown, Eye, EyeOff, History, Home, LogOut, Send, Wallet } from 'lucide-react';
import { User } from 'lucide-react';
import { FC, useState } from 'react';
import useOutsideClick from '@/hooks/outside-click.hook';
import { useLogoutUser } from '@/hooks/auth.hook';
import { useAuth } from '@/hooks/auth.hook';
import { Link } from 'react-router';

const Navbar: FC = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showBalance, setShowBalance] = useState(false);
    const userMenuRef = useOutsideClick(() => setShowUserMenu(false), showUserMenu);

    const { user } = useAuth();
    const { handleLogout, isPending } = useLogoutUser();


    return (
        <nav className="card-white border-b-[3px] border-black p-0 mb-8">
            <div className="max-w-7xl mx-auto md:px-4 flex items-center justify-between px-2">
                {/* User Info Section */}
                <div className="flex items-center">
                    <Link to="/" className='hidden md:block'>
                        <div className="card-yellow p-4 border-r-[3px] border-black">
                            <div className="w-10 h-10 rounded-full bg-white border-[3px] border-black flex items-center justify-center">
                                <User className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                    <div className="relative" ref={userMenuRef}>
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-2 md:px-4 md:py-4 hover:bg-black/5"
                        >
                            <div>
                                <p className="font-bold">{user?.name.fullName}</p>
                                <p className="text-xs">{user?.phone}</p>
                            </div>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {showUserMenu && (
                            <div className="absolute top-full left-0 card-white w-48 py-2 z-50">
                                <Link onClick={() => setShowUserMenu(false)} to="/cash-in">
                                    <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                        <Home className="w-4 h-4" />
                                        <span>Home</span>
                                    </button>
                                </Link>
                                {
                                    user?.role === 'user' && (
                                        <>
                                            <Link onClick={() => setShowUserMenu(false)} to="/send-money">
                                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                                    <Send className="w-4 h-4" />
                                                    <span>Send Money</span>
                                                </button>
                                            </Link>
                                            <Link onClick={() => setShowUserMenu(false)} to="/cash-out">
                                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                                    <ArrowDownToLine className="w-4 h-4" />
                                                    <span>Cash Out</span>
                                                </button>
                                            </Link>
                                            <Link onClick={() => setShowUserMenu(false)} to="/my-transactions">
                                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                                    <History className="w-4 h-4" />
                                                    <span>My Transactions</span>
                                                </button>
                                            </Link>
                                        </>
                                    )
                                }
                                {
                                    user?.role === 'agent' && (
                                        <>
                                            <Link onClick={() => setShowUserMenu(false)} to="/cash-in">
                                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                                    <Send className="w-4 h-4" />
                                                    <span>Cash In</span>
                                                </button>
                                            </Link>
                                            <Link onClick={() => setShowUserMenu(false)} to="/my-transactions">
                                                <button className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                                    <History className="w-4 h-4" />
                                                    <span>My Transactions</span>
                                                </button>
                                            </Link>
                                        </>
                                    )
                                }

                                <button
                                    onClick={handleLogout}
                                    disabled={isPending}
                                    className="w-full text-left px-4 py-2 hover:bg-black/5 flex items-center gap-2">
                                    <LogOut className="w-4 h-4" />
                                    <span>Logout</span>
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
                                {showBalance ? `৳ ${user?.balance}` : '৳ ••••'}
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

                        <Button className="p-4 hidden md:flex">
                            <Bell className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;