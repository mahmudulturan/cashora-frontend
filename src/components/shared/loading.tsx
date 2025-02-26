import { cn } from '@/lib/utils';
import { FC } from 'react';

interface ILoadingProps {
    className?: string;
}

const Loading: FC<ILoadingProps> = ({ className }) => {
    return (
        <div className={cn('flex items-center justify-center h-full bg-white', className)}>
            <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;