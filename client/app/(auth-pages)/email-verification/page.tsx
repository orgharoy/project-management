"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  RiMailSendLine,
  RiErrorWarningLine,
  RiMailForbidLine,
  RiMailCheckLine,
} from "@remixicon/react";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const signup = searchParams.get("signup");
  const error = searchParams.get("error");
  const [status, setStatus] = useState<number>(-1);
  const [email, setEmail] = useState<string | null>("orgharoy@gmail.com");

  useEffect(() => {
    const getEmailAddress = () => {
      const emailForSignIn = localStorage.getItem("emailForSignIn");
      setEmail(emailForSignIn);
    };

    const setPageStatus = () => {
      if (signup === "success") {
        setStatus(0);
      } else if (error === "none") {
        setStatus(1);
      } else if (error === "invalid_token") {
        setStatus(2);
      } else {
        setStatus(3);
      }
    };

    getEmailAddress();
    setPageStatus();
  }, [signup, error]);

  useEffect(() => {
    const clearLocalStorage = () => {
      if (error === "none") {
        localStorage.removeItem("emailForSignIn");
      }
    };

    clearLocalStorage();
  }, [error]);

  if (status === -1) {
    return (
      <div className="bg-background shadow-md p-8 sm:py-8 sm:px-20 border sm:max-w-2xl w-full space-y-5 rounded-xl flex flex-col items-center text-center justify-center">
        <LoaderCircle
          className="text-primary animate-spin"
          size={48}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
    );
  } else if (status === 0) {
    return (
      <div className="bg-background shadow-md p-8 sm:py-8 sm:px-20 border sm:max-w-2xl w-full space-y-5 rounded-xl flex flex-col items-center text-center justify-center">
        <RiMailSendLine className="text-primary" size={48} />
        <h1 className="text-2xl font-bold py-2">Check Your Email</h1>
        <p>
          Thank you for joining *Company Name*. We have sent an email
          verification link to <b>{email}</b>.
        </p>
        <p className="text-center">
          If you don't see the email, please check your spam folder or{" "}
          <span className="underline cursor-pointer">
            click here to resend.
          </span>
        </p>
      </div>
    );
  } else if (status === 1) {
    return (
      <div className="bg-background shadow-md p-8 sm:py-8 sm:px-20 border sm:max-w-2xl w-full space-y-5 rounded-xl flex flex-col items-center text-center justify-center">
        <RiMailCheckLine className="text-primary" size={48} />
        <h1 className="text-2xl font-bold py-2">
          Email Verification Successful
        </h1>
        <p>Congratulations, your email has been verified successfully!</p>
        <p className="text-center">
          You can now{" "}
          <Link href="/login" className="underline cursor-pointer">
            sign in to your account
          </Link>
          .
        </p>
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="bg-background shadow-md p-8 sm:py-8 sm:px-20 border sm:max-w-2xl w-full space-y-5 rounded-xl flex flex-col items-center text-center justify-center">
        <RiMailForbidLine className="text-primary" size={48} />
        <h1 className="text-2xl font-bold py-2">Error Verifying Email</h1>
        <p>
          It seems there was an issue with sending your verification email.
          Please try the following:
        </p>
        <ul className="list-disc list-inside text-start">
          <li>Check your email address for any typos.</li>
          <li>
            If everything looks correct, you can request a{" "}
            <span className="underline cursor-pointer">
              new verification email
            </span>
            .
          </li>
          <li>
            If you continue to experience issues, please{" "}
            <span className="underline cursor-pointer">
              contact our support team
            </span>{" "}
            for assistance.
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="bg-background shadow-md p-8 sm:py-8 sm:px-20 border sm:max-w-2xl w-full space-y-5 rounded-xl flex flex-col items-center text-center justify-center">
        <RiErrorWarningLine className="text-primary" size={48} />
        <h1 className="text-2xl font-bold py-2">
          An Unexpected Error Occurred
        </h1>
        <p>
          Please try again later or contact{" "}
          <span className="underline cursor-pointer font-bold">support</span> if
          the problem persists.
        </p>
      </div>
    );
  }
};

export default Page;
