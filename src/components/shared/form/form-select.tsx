import { Select, SelectContent, SelectItem, SelectGroup, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FC, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export interface IFormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    required?: boolean;
    type?: string;
    name: string;
    options: {
        key: string;
        label: string;
    }[];
    placeholder?: string;
    disabled?: boolean;
}

const FormSelect: FC<IFormSelectProps> = ({ name, ...props }) => {
    const { register, setValue, watch, trigger, formState: { errors } } = useFormContext();
    const value = watch(name);

    const errorMessage = errors?.[name]?.message as string;
    return (
        <>
            <Select
                disabled={props.disabled}
                value={value}
                onValueChange={(newValue) => {
                    setValue(name, newValue);
                    trigger(name);
                }}
            >
                <SelectTrigger className={`${props.className} pl-12`}>
                    <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {props.options.map((option) => (
                            <SelectItem key={option.key} value={option.key}>{option.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {errorMessage && <p className="text-red-500 text-sm absolute top-full mt-1">{errorMessage}</p>}
        </>
    );
};

export default FormSelect;