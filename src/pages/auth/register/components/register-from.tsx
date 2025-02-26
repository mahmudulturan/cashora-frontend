import { IdCard, Key, Mail, User, UserCog } from 'lucide-react';
// import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone } from 'lucide-react';
import { FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router';
import Form from '@/components/shared/form/form';
import FormInput from '@/components/shared/form/form-input';
import authValidations from '@/schema/auth.validation';
import FormSelect from '@/components/shared/form/form-select';
import { useRegisterUser } from '@/hooks/auth.hook';

const RegisterForm: FC = () => {
    const { mutate: registerUser, isPending: isRegistering, isSuccess: isRegistered } = useRegisterUser();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        registerUser(data);
    }


    useEffect(() => {
        if (isRegistered && !isRegistering) {
            navigate('/');
        }
    }, [isRegistered, isRegistering]);

    return (
        <Form schema={authValidations.registerUser} onSubmit={onSubmit} className="card-white rounded-lg p-8 space-y-6">
            <div className="flex gap-4">
                <div className="flex-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                        <FormInput
                            name="name.firstName"
                            type="text"
                            id="name.firstName"
                            className="pl-12 w-full"
                            placeholder="Enter first name"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                        <FormInput
                            name="name.lastName"
                            type="text"
                            id="name.lastName"
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
                    <FormInput
                        name="nid"
                        type="text"
                        id="nid"
                        minLength={10}
                        maxLength={10}
                        className="pl-12 w-full"
                        placeholder="Enter your NID"
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <FormInput
                        name="email"
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
                    <FormInput
                        name="phone"
                        type="tel"
                        minLength={11}
                        maxLength={11}
                        id="phone"
                        className="pl-12 w-full"
                        placeholder="01XXXXXXXXX"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="role">Account Type</Label>
                <div className="relative">
                    <UserCog className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <FormSelect
                        name="role"
                        id='role'
                        placeholder='Select Account Type'
                        options={[
                            { key: 'user', label: 'User' },
                            { key: 'agent', label: 'Agent' }
                        ]}
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="pin">PIN</Label>
                <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                    <FormInput
                        name="pin"
                        type="password"
                        id="pin"
                        className="pl-12 w-full"
                        placeholder="Enter your 5-digit PIN"
                        maxLength={5}
                    />
                </div>
            </div>

            <Button type='submit' className='w-full bg-green-400' loading={isRegistering}>
                Register
            </Button>

            <p className="text-center">
                Already have an account?{' '}
                <Link to="/login" className="font-bold underline">Login</Link>
            </p>
        </Form>
    );
};

export default RegisterForm;