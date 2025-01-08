import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  rememberMe: z.boolean().default(true),
});

export const registerNewUserForm = z
  .object({
    fullName: z.string().min(1, "Last name is required"),

    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .min(1, "Password is required"),

    confirmPassword: z.string().min(1, "Confirm password is required"),
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
