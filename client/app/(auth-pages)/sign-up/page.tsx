"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { registerNewUserForm } from "@/lib/formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { authClient } from "@/lib/auth-client";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  type RegisterNewUserFormValues = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const form = useForm<RegisterNewUserFormValues>({
    resolver: zodResolver(registerNewUserForm),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: RegisterNewUserFormValues) {
    const { data, error } = await authClient.signUp.email({
      email: values.email, 
        password: values.password, 
        name: values.fullName, 
        image: "https://example.com/image.png", 
    });
    
    console.log({data, error})
  }

  return (
    <div className="bg-background shadow-md px-3 py-6 sm:p-8 border sm:max-w-md w-full space-y-5 rounded-xl">
      <div className="mb-5 text-center">
        <h5 className="font-bold text-3xl">Sign Up!</h5>
        <p className="text-muted-foreground text-sm font-light my-1">
          Create a new account and get started!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className={cn("mb-6")}>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={cn("mb-6")}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@doe.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={cn("mb-6")}>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
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
                  <PasswordInput placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            className={cn("mt-4 w-full")}
          >
            {isLoading && (
              <LoaderCircle
                className="-ms-1 me-2 animate-spin"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            )}
            Create Account
          </Button>
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
        Already have an account?{" "}
        <span className="underline">
          <Link href="/login">Login instead</Link>
        </span>
      </p>
    </div>
  );
};

export default page;
