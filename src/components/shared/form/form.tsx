import { FC } from 'react';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

interface IFormConfig {
    defaultValues?: Record<string, any>;
    resolver?: Resolver;
}

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: (data: any) => void;
    schema?: ZodSchema;
    defaultValues?: any;
}

const Form: FC<IFormProps> = ({ children, onSubmit, schema, defaultValues, ...props }) => {
    const formConfig: IFormConfig = {};

    if (!!schema) {
        formConfig['resolver'] = zodResolver(schema);
    }

    if (!!defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    const methods = useForm(formConfig);

    return (
        <FormProvider {...methods}>
            <form {...props} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;