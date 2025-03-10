import { FC, useEffect, useState } from 'react';
import { Eye, Key, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router';
import { Label } from '@/components/ui/label';
import authValidations from '@/schema/auth.validation';
import Form from '@/components/shared/form/form';
import FormInput from '@/components/shared/form/form-input';
import { useLoginUser } from '@/hooks/auth.hook';

const LoginForm: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { mutate: loginUser, isPending: isLoggingIn, isSuccess: isLoggedIn } = useLoginUser();
    
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        loginUser(data);
    }

    useEffect(() => {
        if (isLoggedIn && !isLoggingIn) {
            navigate('/');
        }
    }, [isLoggedIn, isLoggingIn]);

    return (
        <Form schema={authValidations.loginUser} onSubmit={onSubmit} className="card-white rounded-lg p-8 space-y-6">
            <div>
                <Label htmlFor="emailOrPhone">Email or Phone</Label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                    <FormInput
                        type="tel"
                        id="emailOrPhone"
                        name="emailOrPhone"
                        className="pl-12 w-full"
                        placeholder="Email Address or Phone Number"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="pin">PIN</Label>
                <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                    <FormInput
                        type={showPassword ? "text" : "password"}
                        id="pin"
                        name="pin"
                        className="pl-12 w-full"
                        placeholder="Enter your 5-digit PIN"
                        maxLength={5}
                    />
                    <span className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent border-none px-3 p-2 hover:bg-slate-300 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                        <Eye className="w-5 h-5" />
                    </span>
                </div>
            </div>

            <Button type='submit' className='w-full' loading={isLoggingIn}>
                Login
            </Button>

            <p className="text-center">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold underline">Register</Link>
            </p>
        </Form>
    );
};

export default LoginForm;