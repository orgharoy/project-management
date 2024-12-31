"use client";

import React, { useState } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { loginFormSchema } from "@/lib/formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  type LoginUserFormValue = {
    email: string;
    password: string;
  };

  const form = useForm<LoginUserFormValue>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginUserFormValue) {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background shadow-md p-8 border sm:max-w-sm w-full space-y-5 rounded-xl">
      <div className="mb-5 text-center">
        <h5 className="font-bold text-3xl">Welcome Back!</h5>
        <p className="text-muted-foreground text-sm font-light whitespace-nowrap my-1">
          Sign in to access your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={cn("mb-6")}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@doe.com" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={cn("mb-2")}>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end mb-4">
            <Link
              href="/forgot-password"
              className=" text-muted-foreground text-sm text-end hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="w-full flex justify-center">
            <Button disabled={isLoading} type="submit" className="w-full mt-4">
              {isLoading && (
                <LoaderCircle
                  className="-ms-1 me-2 animate-spin"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
              Login
            </Button>
          </div>
        </form>
      </Form>

      <div className="flex flex-wrap gap-2 w-full">
        <Button
          className="flex-1"
          variant="outline"
          aria-label="Login with Google"
          size="icon"
        >
          <RiGoogleFill
            className="text-[#DB4437] dark:text-primary"
            size={16}
            aria-hidden="true"
          />
        </Button>
        {/* <Button
          className="flex-1"
          variant="outline"
          aria-label="Login with Facebook"
          size="icon"
        >
          <RiFacebookFill
            className="text-[#1877f2] dark:text-primary"
            size={16}
            aria-hidden="true"
          />
        </Button> */}
      </div>

      <p className="mt-3 text-center text-sm">
        Don't have an account?{" "}
        <span className="underline">
          <Link href="/sign-up">Signup instead</Link>
        </span>
      </p>
    </div>
  );
};

export default page;
