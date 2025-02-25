import { IdCard, Key, Mail, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone } from 'lucide-react';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const RegisterForm: FC = () => {
    return (
        <form className="card-white rounded-lg p-8 space-y-6">
            <div className="flex gap-4">
                <div className="flex-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                        <Input
                            type="text"
                            id="firstName"
                            className="pl-12 w-full"
                            placeholder="Enter first name"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                        <Input
                            type="text"
                            id="lastName"
                            className="pl-12 w-full"
                            placeholder="Enter last name"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Label htmlFor="nid">NID</Label>
                <div className="relative">
                    <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <Input
                        type="text"
                        id="nid"
                        className="pl-12 w-full"
                        placeholder="Enter your NID"
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <Input
                        type="email"
                        id="email"
                        className="pl-12 w-full"
                        placeholder="Enter your email"
                    />
                </div>
            </div>
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
                Register
            </Button>

            <p className="text-center">
                Already have an account?{' '}
                <Link to="/login" className="font-bold underline">Login</Link>
            </p>
        </form>
    );
};

export default RegisterForm;