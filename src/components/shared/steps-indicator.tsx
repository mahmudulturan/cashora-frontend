import { FC } from 'react';

interface IStepsIndicatorProps {
    step: number;
}

const StepsIndicator: FC<IStepsIndicatorProps> = ({ step }) => {
    return (
        <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className={`h-3 w-12 rounded-full ${i <= step ? 'bg-[#FFE14D]' : 'bg-gray-200'
                        } card-white`}
                />
            ))}
        </div>
    );
};

export default StepsIndicator;