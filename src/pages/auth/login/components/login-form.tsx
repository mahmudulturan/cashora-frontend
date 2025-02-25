import { FC } from 'react';
import { Phone, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router';
import { Label } from '@/components/ui/label';

const LoginForm: FC = () => {
    return (
        <form className="card-white rounded-lg p-8 space-y-6">
            <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <Input
                        type="tel"
                        id="phone"
                        className="pl-12 w-full"
                        placeholder="01XXXXXXXXX"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="pin">PIN</Label>
                <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <Input
                        type="password"
                        id="pin"
                        className="pl-12 w-full"
                        placeholder="Enter your 5-digit PIN"
                        maxLength={5}
                    />
                </div>
            </div>

            <Button type='submit' className='w-full'>
                Login
            </Button>

            <p className="text-center">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold underline">Register</Link>
            </p>
        </form>
    );
};

export default LoginForm;