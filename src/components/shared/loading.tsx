import { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;