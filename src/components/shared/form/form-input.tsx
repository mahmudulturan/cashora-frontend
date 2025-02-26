import { Input } from '@/components/ui/input';
import { FC, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    type?: string;
    name: string;
    disabled?: boolean;
}


const FormInput: FC<IFormInputProps> = ({ name, ...props }) => {
    const { register, formState: { errors } } = useFormContext();

    let errorMessage = '';
    const nestedName = name.split('.');
    
    if (nestedName.length > 1) {
        const nestedError = errors?.[nestedName[0]] as Record<string, { message: string }>;
        errorMessage = nestedError?.[nestedName[1]]?.message || '';
    } else {
        errorMessage = (errors?.[name]?.message as string) || '';
    }

    return (
        <>
            <Input {...register(name)} {...props} />
            {errorMessage && <p className="text-red-500 text-sm absolute top-full mt-1">{errorMessage}</p>}
        </>
    );
};

export default FormInput;