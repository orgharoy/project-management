"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShieldAlert, LoaderCircle, CircleCheckBig, Key } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

import { forgotPasswordFormSchema } from "@/lib/formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [sendEmailSuccess, setSendEmailSuccess] = useState<boolean>(false);
  const [resetPasswordSuccess, setResetPasswordSuccess] =
    useState<boolean>(false);
  const error = useSearchParams().get("error");
  const token = useSearchParams().get("token");

  type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>;

  const form = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleRequestPasswordReset = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await authClient.forgetPassword({
        email,
        redirectTo: "/forgot-password?error=none",
      });
      setSendEmailSuccess(true);
    } catch (ex) {
      toast.error("An unexpected error occured. Please try again later.");
      console.error(ex);
    } finally {
      setIsLoading(false);
    }
  };

  async function onSubmit(values: ForgotPasswordFormValues) {
    setIsLoading(true);
    try {
      const { data, error } = await authClient.resetPassword(
        {
          newPassword: values.newPassword,
        },
        {
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        }
      );

      if (!error) {
        setResetPasswordSuccess(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (error === "INVALID_TOKEN") {
    return (
      <div className="bg-background shadow-md p-3 sm:px-10 sm:py-10 border sm:max-w-sm w-full space-y-5 rounded-xl flex flex-col items-center justify-center">
        <ShieldAlert size={48} className="text-primary" />
        <h1 className="text-2xl font-bold py-2">Invalid Token</h1>
        <p className="text-center w-full">
          The token you are trying to use is invalid. Please try again.
        </p>
      </div>
    );
  } else if (error === "none" && token) {
    return (
      <div className="bg-background shadow-md p-3 sm:px-10 sm:py-10 border sm:max-w-sm w-full space-y-5 rounded-xl flex flex-col items-center justify-center">
        {resetPasswordSuccess ? (
          <CircleCheckBig size={48} className="text-primary" />
        ) : (
          <Key size={48} className="text-primary" />
        )}
        <h1 className="text-2xl font-bold py-2 w-full text-center">
          Reset Password {resetPasswordSuccess && " Successful"}
        </h1>
        {resetPasswordSuccess ? (
          <p className="w-full text-center">
            Your password has been reset successfully.
            <br />
            <span>
              <Link href="/login" className="underline cursor-pointer">
                Go to login
              </Link>
            </span>
          </p>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto w-full"
            >
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className={cn("mb-6")}>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className={cn("mb-6")}>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex justify-center">
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="w-full mt-4"
                >
                  {isLoading && (
                    <LoaderCircle
                      className="-ms-1 me-2 animate-spin"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  Update Password
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    );
  } else {
    return (
      <div className="bg-background shadow-md p-3 sm:px-10 sm:py-10 border sm:max-w-sm w-full space-y-5 rounded-xl flex flex-col items-center justify-center">
        {sendEmailSuccess ? (
          <CircleCheckBig size={48} className="text-primary" />
        ) : (
          <ShieldAlert size={48} className="text-primary" />
        )}
        <h1 className="text-2xl font-bold py-2">Forgot Password?</h1>
        {sendEmailSuccess ? (
          <p className="text-center w-full">
            We have sent a password reset link to <b>{email}</b>
          </p>
        ) : (
          <>
            <Label htmlFor="email" className="w-full text-center leading-5">
              Enter your mail and we will send you a link to reset your password
            </Label>
            <div className="w-full pt-6">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex flex-wrap gap-2 w-full">
                <Button
                  disabled={isLoading}
                  onClick={handleRequestPasswordReset}
                  type="submit"
                  className="w-full mt-4"
                >
                  {isLoading && (
                    <LoaderCircle
                      className="-ms-1 me-2 animate-spin"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  Submit
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default ForgotPassword;
