import { z } from 'zod';

const pinValidationSchema = z.string().min(5, { message: 'Pin must be 5 digits' }).max(5, { message: 'Pin must be 5 digits' });

const registerUserValidationSchema = z.object({
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
})



const authValidations = {
    registerUser: registerUserValidationSchema
}

export default authValidations;
