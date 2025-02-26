import { FC, useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface IHoldButtonProps {
    onComplete: () => void;
    disabled?: boolean;
}

const HoldButton: FC<IHoldButtonProps> = ({ onComplete, disabled }) => {
    const [progress, setProgress] = useState(0);
    const [holding, setHolding] = useState(false);
    const DURATION = 1000; // 1 second

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const newProgress = Math.min((elapsedTime / DURATION) * 100, 100);

            setProgress(newProgress);

            if (newProgress < 100 && holding) {
                animationFrame = requestAnimationFrame(animate);
            } else if (newProgress >= 100) {
                onComplete();
                setHolding(false);
            }
        };

        if (holding) {
            startTime = 0;
            animationFrame = requestAnimationFrame(animate);
        } else {
            setProgress(0);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [holding, onComplete]);

    const handleStart = useCallback(() => {
        setHolding(true);
    }, []);

    const handleEnd = useCallback(() => {
        setHolding(false);
    }, []);

    return (
        <Button
            type="button"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            className="w-full bg-[#00DCA5] relative overflow-hidden"
            disabled={disabled}
        >
            <span className="relative z-10">
                {holding ? 'Hold to Confirm...' : 'Press and Hold to Send'}
            </span>
            <div
                className="absolute left-0 top-0 h-full bg-black/10"
                style={{
                    width: `${progress}%`,
                    transition: holding ? 'none' : 'width 0.2s ease-out'
                }}
            />
        </Button>
    );
};

export default HoldButton;
