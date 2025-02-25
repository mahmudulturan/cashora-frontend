import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { Link } from 'react-router';

const Navbar: FC = () => {
    return (
        <nav className="card-white rounded-lg my-8 mx-8 flex justify-between items-center py-2 px-4">
            <Link to="/">
                <Logo size="sm" />
            </Link>
            <Button>
                Logout
            </Button>
        </nav>
    );
};

export default Navbar;