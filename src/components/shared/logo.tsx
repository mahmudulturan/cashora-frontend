import { Wallet } from 'lucide-react';
import { FC } from 'react';

const Logo: FC<{ size?: "sm" | "lg" }> = ({ size = "lg" }) => {
    return (
        <div className="inline-flex items-center gap-2">
            <Wallet className={`w-${size === "sm" ? "8" : "12"} h-${size === "sm" ? "8" : "12"}`} />
            <h1 className={`text-${size === "sm" ? "2xl" : "4xl"} font-bold`}>Cashora</h1>
        </div>
    );
};

export default Logo;
