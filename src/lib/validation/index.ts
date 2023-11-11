import * as z from 'zod';

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: 'too short' }),
  username: z.string().min(2).max(50),
  email: z.string().email('not a valid email'),
  password: z.string().min(8, { message: 'too short password' }),
});
