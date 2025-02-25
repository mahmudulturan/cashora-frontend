import { Wallet } from 'lucide-react';
import { FC } from 'react';

const Logo: FC = () => {
    return (
        <div className="inline-flex items-center gap-2 mb-4">
            <Wallet className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Cashora</h1>
        </div>
    );
};

export default Logo;
