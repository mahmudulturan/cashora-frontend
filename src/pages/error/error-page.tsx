import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import { FC } from 'react';

const ErrorPage: FC = () => {

    const statusCode = 404;
    const title = "Page Not Found";
    const message = "The page you're looking for doesn't exist or has been moved.";
    const onRetry = () => window.location.reload();
    const onGoBack = () => window.history.back();

    return (
        <div className="min-h-screen bg-[#FCFCF7] flex items-center justify-center p-4">
            <div className="card-yellow max-w-md w-full p-8 relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="card-white w-24 h-24 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-12 h-12" />
                    </div>
                </div>

                <div className="text-center mt-12 mb-8">
                    <h1 className="text-6xl font-bold mb-2">{statusCode}</h1>
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="mb-8">{message}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={onGoBack}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Go Back</span>
                        </Button>

                        <Button
                            onClick={onRetry}
                            variant={"neutral"}
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Try Again</span>
                        </Button>
                    </div>
                </div>

                <div className="card-white p-4 text-center mt-8">
                    <p className="text-sm">
                        If the problem persists, please contact our support team at <br />
                        <a href="mailto:support@cashora.com" className="font-bold underline">support@cashora.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;