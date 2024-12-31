import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const registerNewUserForm = z
  .object({
    fullName: z.string().min(1, "Last name is required"), // Ensures the full name is provided

    email: z
      .string()
      .email("Invalid email address") // Ensures the email is in a valid format
      .min(1, "Email is required"), // Ensures the email is provided

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long") // Enforces minimum length for password
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // Enforces at least one uppercase letter
      .regex(/[a-z]/, "Password must contain at least one lowercase letter") // Enforces at least one lowercase letter
      .regex(/[0-9]/, "Password must contain at least one number") // Enforces at least one digit
      .min(1, "Password is required"), // Ensures the password is provided

    confirmPassword: z.string().min(1, "Confirm password is required"), // Ensures confirm password is provided
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const newProjectFormSchema = z.object({
  title: z.string(),
  clientName: z.string(),
  billingType: z.string(),
  fee: z.number().min(0),
  deadline: z.coerce.date(),
  priority: z.string(),
});
