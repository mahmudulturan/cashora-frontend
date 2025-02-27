import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useCallback, useEffect } from 'react';
import { Phone, Calculator, ArrowRight, Key } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HoldButton from '@/components/shared/hold-button';
import { useSendMoney } from '@/hooks/transaction.hook';
import { useSearchParams } from 'react-router';

interface ISendMoneyFromProps {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    setShowConfirmation: Dispatch<SetStateAction<boolean>>;
    setIsSuccess: Dispatch<SetStateAction<boolean>>;
    formData: {
        receiver: string;
        amount: string;
        pin: string;
    };
    setFormData: Dispatch<SetStateAction<{
        receiver: string;
        amount: string;
        pin: string;
    }>>;
}


const SendMoneyFrom: FC<ISendMoneyFromProps> = ({ step, setStep, setShowConfirmation, setIsSuccess, formData, setFormData }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { mutate: sendMoney, isPending: isSending, isSuccess: isSendSuccess } = useSendMoney();

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
            setSearchParams(prev => {
                prev.set('step', (step + 1).toString());
                return prev;
            });
        }
    };

    const handleComplete = useCallback(() => {
        sendMoney({
            receiver: formData.receiver,
            amount: Number(formData.amount),
            pin: formData.pin,
        });

    }, [setShowConfirmation, setIsSuccess, formData, sendMoney]);


    useEffect(() => {
        if (isSendSuccess && !isSending) {
            setShowConfirmation(true);
            setIsSuccess(true);
        }
    }, [isSendSuccess, isSending]);

    useEffect(() => {
        if (searchParams.get('step')) {
            setStep(Number(searchParams.get('step')));
        } else {
            setStep(1);
            setSearchParams(prev => {
                prev.set('step', '1');
                return prev;
            });
        }
    }, [searchParams]);


    return (
        <form onSubmit={handleSubmit} className="card-white rounded-lg p-8">
            {step === 1 && (
                <div className="space-y-6">
                    <div>
                        <label className="block font-bold mb-2" htmlFor="receiver">Receiver's Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                            <Input
                                type="tel"
                                id="receiver"
                                name="receiver"
                                maxLength={11}
                                minLength={11}
                                value={formData.receiver}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="01XXXXXXXXX"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={formData.receiver.length !== 11}>
                        Next <ArrowRight className="w-4 h-4 inline ml-2" />
                    </Button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    <div>
                        <label className="block font-bold mb-2" htmlFor="amount">Amount</label>
                        <div className="relative">
                            <Calculator className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                            <Input
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="Enter amount"
                                min={1}
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

                    <Button disabled={formData.amount === ''} type="submit" className="w-full">
                        Next <ArrowRight className="w-4 h-4 inline ml-2" />
                    </Button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-6">
                    <div className="card-yellow p-4 rounded-lg mb-6">
                        <p className="font-bold">Confirm Transaction</p>
                        <div className="mt-2 space-y-1">
                            <p>To: {formData.receiver}</p>
                            <p>Amount: ৳{formData.amount}</p>
                            <p>Fee: ৳{calculateFee(Number(formData.amount))}</p>
                            <p className="font-bold">Total: ৳{Number(formData.amount) + calculateFee(Number(formData.amount))}</p>
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold mb-2" htmlFor="pin">Enter PIN to Confirm</label>
                        <div className="relative">
                            <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                            <Input
                                type="password"
                                id="pin"
                                name="pin"
                                value={formData.pin}
                                onChange={handleInputChange}
                                className="pl-12 w-full"
                                placeholder="Enter your 5-digit PIN"
                                maxLength={5}
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <HoldButton onComplete={handleComplete} disabled={formData.pin.length !== 5 || isSending} loading={isSending} />
                    </div>
                </div>
            )}
        </form>
    );
};

export default SendMoneyFrom;