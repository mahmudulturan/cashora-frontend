import { z } from 'zod';

const pinValidationSchema = z.string().min(5, { message: 'Pin must be 5 digits' }).max(5, { message: 'Pin must be 5 digits' });

const registerUser = z.object({
    name: z.object({
        firstName: z.string().min(1, "Enter first name"),
        lastName: z.string().min(1, "Enter last name"),
    }),
    email: z.string().email("Invalid email format").trim().toLowerCase(),
    phone: z.string().length(11, "Phone number must be 11 digits"),
    role: z.enum(['user', 'agent'], {
        errorMap: () => ({ message: "Select user or agent role" })
    }),
    pin: pinValidationSchema,
    nid: z.string().length(10, "NID must be 10 digits")
});

const loginUser = z.object({
    emailOrPhone: z.string({
        required_error: 'Email or phone number is required',
    }).refine(value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{11,11}$/;
        return emailRegex.test(value) || mobileRegex.test(value);
    }, {
        message: 'Must be a valid email or phone number',
    }),
    pin: pinValidationSchema
});


const authValidations = {
    registerUser,
    loginUser
}

export default authValidations;
