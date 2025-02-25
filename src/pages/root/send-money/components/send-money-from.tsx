import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useRef, useState } from 'react';
import { Phone, Calculator, ArrowRight, Key } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ISendMoneyFromProps {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    setShowConfirmation: Dispatch<SetStateAction<boolean>>;
    setIsSuccess: Dispatch<SetStateAction<boolean>>;
    formData: {
        recipient: string;
        amount: string;
        pin: string;
    };
    setFormData: Dispatch<SetStateAction<{
        recipient: string;
        amount: string;
        pin: string;
    }>>;
}

const SendMoneyFrom: FC<ISendMoneyFromProps> = ({ step, setStep, setShowConfirmation, setIsSuccess, formData, setFormData }) => {
    const [holdProgress, setHoldProgress] = useState(0);
    const [isHolding, setIsHolding] = useState(false);
    const holdTimeRef = useRef<number>(0);
    const animationFrameRef = useRef<number>(0);
    const HOLD_DURATION = 1000; // 1 second hold duration

    const calculateFee = (amount: number) => {
        return amount > 100 ? 5 : 0;
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const startHolding = () => {
        setIsHolding(true);
        holdTimeRef.current = Date.now();
        updateHoldProgress();
    };

    const updateHoldProgress = () => {
        const now = Date.now();
        const holdTime = now - holdTimeRef.current;
        const progress = Math.min((holdTime / HOLD_DURATION) * 100, 100);
        setHoldProgress(progress);

        if (progress < 100) {
            animationFrameRef.current = requestAnimationFrame(updateHoldProgress);
        } else {
            setShowConfirmation(true);
            setIsSuccess(true);
        }
    };

    const stopHolding = () => {
        setIsHolding(false);
        setHoldProgress(0);
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card-white rounded-lg p-8">
            {step === 1 && (
                <div className="space-y-6">
                    <div>
                        <label className="block font-bold mb-2" htmlFor="recipient">Recipient's Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                            <Input
                                type="tel"
                                id="recipient"
                                name="recipient"
                                value={formData.recipient}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="01XXXXXXXXX"
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Next <ArrowRight className="w-4 h-4 inline ml-2" />
                    </Button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    <div>
                        <label className="block font-bold mb-2" htmlFor="amount">Amount</label>
                        <div className="relative">
                            <Calculator className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                            <Input
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                    </div>

                    {formData.amount && (
                        <div className="card-yellow p-4 rounded-lg">
                            <p className="font-bold">Transaction Summary</p>
                            <div className="mt-2 space-y-1">
                                <p>Amount: ৳{formData.amount}</p>
                                <p>Fee: ৳{calculateFee(Number(formData.amount))}</p>
                                <p className="font-bold">Total: ৳{Number(formData.amount) + calculateFee(Number(formData.amount))}</p>
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        Next <ArrowRight className="w-4 h-4 inline ml-2" />
                    </Button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-6">
                    <div className="card-yellow p-4 rounded-lg mb-6">
                        <p className="font-bold">Confirm Transaction</p>
                        <div className="mt-2 space-y-1">
                            <p>To: {formData.recipient}</p>
                            <p>Amount: ৳{formData.amount}</p>
                            <p>Fee: ৳{calculateFee(Number(formData.amount))}</p>
                            <p className="font-bold">Total: ৳{Number(formData.amount) + calculateFee(Number(formData.amount))}</p>
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold mb-2" htmlFor="pin">Enter PIN to Confirm</label>
                        <div className="relative">
                            <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                            <Input
                                type="password"
                                id="pin"
                                name="pin"
                                value={formData.pin}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="Enter your 5-digit PIN"
                                maxLength={5}
                                required
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <Button
                            type="button"
                            onMouseDown={startHolding}
                            onMouseUp={stopHolding}
                            onMouseLeave={stopHolding}
                            onTouchStart={startHolding}
                            onTouchEnd={stopHolding}
                            className="w-full bg-[#00DCA5] relative overflow-hidden"
                            disabled={!formData.pin}
                        >
                            <span className="relative z-10">
                                {isHolding ? 'Hold to Confirm...' : 'Press and Hold to Send'}
                            </span>
                            <div
                                className="absolute left-0 bottom-0 h-full bg-black/10 transition-all duration-100"
                                style={{ width: `${holdProgress}%` }}
                            />
                        </Button>
                        {!formData.pin && (
                            <p className="text-sm text-red-500 mt-2">Please enter your PIN first</p>
                        )}
                    </div>
                </div>
            )}
        </form>
    );
};

export default SendMoneyFrom;