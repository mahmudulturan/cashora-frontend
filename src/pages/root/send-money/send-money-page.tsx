import { FC, useState } from 'react';
import StepsIndicator from './components/steps-indicator';
import { CheckCircle2, Send, XCircle } from 'lucide-react';
import SendMoneyFrom from './components/send-money-from';
import calculateTransactionFee from '@/utils/calculateTransactionFee';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const SendMoneyPage: FC = () => {
    const [step, setStep] = useState<number>(1);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [formData, setFormData] = useState({
        recipient: '',
        amount: '',
        pin: '',
    });

    return (
        <>
            {showConfirmation ? (
                <div className="min-h-[calc(100vh-130px)] flex items-center justify-center p-6">
                    <div className="w-full max-w-md text-center">
                        <div className={`card-${isSuccess ? 'green' : 'pink'} rounded-lg p-8 mb-6`}>
                            {isSuccess ? (
                                <>
                                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                                    <h2 className="text-2xl font-bold mb-2">Transfer Successful!</h2>
                                    <p>Your money has been sent successfully.</p>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-16 h-16 mx-auto mb-4" />
                                    <h2 className="text-2xl font-bold mb-2">Transfer Failed</h2>
                                    <p>Something went wrong. Please try again.</p>
                                </>
                            )}
                        </div>

                        <div className="card-white rounded-lg p-6">
                            <h3 className="font-bold mb-4">Transaction Details</h3>
                            <div className="space-y-2 text-left">
                                <p><span className="font-bold">Recipient:</span> {formData.recipient}</p>
                                <p><span className="font-bold">Amount:</span> ৳{formData.amount}</p>
                                <p><span className="font-bold">Fee:</span> ৳{calculateTransactionFee(Number(formData.amount), 'send_money')}</p>
                                <p><span className="font-bold">Total:</span> ৳{Number(formData.amount) + calculateTransactionFee(Number(formData.amount), 'send_money')}</p>
                            </div>
                        </div>
                        <Link to="/">
                            <Button
                                className="w-full mt-6"
                            >
                                Back to Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='min-h-[calc(100vh-130px)] bg-bg flex items-center justify-center p-6'>
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Send className="w-12 h-12" />
                                <h1 className="text-4xl font-bold">Send Money</h1>
                            </div>
                        </div>
                        <StepsIndicator step={step} />
                        <SendMoneyFrom step={step} setStep={setStep} setIsSuccess={setIsSuccess} setShowConfirmation={setShowConfirmation} formData={formData} setFormData={setFormData} />
                    </div>
                </div>
            )}
        </>
    );
};

export default SendMoneyPage;