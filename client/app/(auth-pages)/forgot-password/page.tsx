"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RiErrorWarningFill } from "@remixicon/react";

const page = () => {
  return (
    <div className="bg-background shadow-md px-3 py-6 sm:p-8 border sm:max-w-sm w-full space-y-5 rounded-xl">
      <div className="mb-10 text-center">
        <h5 className="font-bold text-3xl">Forgot Password?</h5>
        <p className="text-muted-foreground text-sm font-light my-1">
          Reset your password
        </p>
      </div>

      <ForgotPassword />
    </div>
  );
};

export default page;

const ForgotPassword = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    setCurrentTab((prev) => Math.min(prev + 1, 2));
  };

  const handlePrevious = () => {
    setCurrentTab((prev) => Math.max(prev - 1, 0));
  };

  const handleResetPasswordClick = () => {
    console.log({ email, verificationCode, newPassword, confirmPassword });
  };

  if (currentTab === 0) {
    return (
      <div>
        <Label htmlFor="email" className="block mb-4">
          Enter your email:
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6"
          required
        />
        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            variant="expandIcon"
            Icon={ArrowRight}
            iconplacement="right"
          >
            Next
          </Button>
        </div>
      </div>
    );
  } else if (currentTab === 1) {
    return (
      <div>
        <Label htmlFor="verificationCode" className="block mb-4">
          Enter verification code sent to your email:
        </Label>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          value={verificationCode}
          onChange={(value) => setVerificationCode(value)}
        >
          <InputOTPGroup id="verificationCode" className={cn("w-full mb-6")}>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            variant="expandIcon"
            Icon={ArrowLeft}
            iconplacement="left"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            variant="expandIcon"
            Icon={ArrowRight}
            iconplacement="right"
          >
            Next
          </Button>
        </div>
      </div>
    );
  } else if (currentTab === 2) {
    return (
      <div>
        <Label htmlFor="newPassword" className="block mb-4">
          Enter new password:
        </Label>
        <Input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-4"
          required
        />
        <Label htmlFor="confirmNewPassword" className="block mb-4">
          Confirm new password:
        </Label>
        <Input
          id="confirmNewPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-6"
          required
        />
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            variant="expandIcon"
            Icon={ArrowLeft}
            iconplacement="left"
          >
            Back
          </Button>
          <Button onClick={handleResetPasswordClick}>Reset Password</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center flex flex-col items-center rounded-md bg-muted p-4">
        <RiErrorWarningFill />
        <h3 className="font-semibold mt-3 mb-1">Unexpected Error Occured</h3>
        <p className="text-sm text-muted-foreground">Contact Administrator</p>
      </div>
    );
  }
};
