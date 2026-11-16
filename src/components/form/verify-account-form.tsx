"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldLabel } from "../ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const VerifyAccountForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const handleOtp = () => {
    console.log(otp);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Account</CardTitle>
        <CardDescription>
          Please provide the OTP we send you in your email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="otp-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOtp();
          }}
        >
          <Field>
            <FieldLabel htmlFor="otp">OTP</FieldLabel>
            <InputOTP
              autoComplete="off"
              name="otp"
              id="otp"
              pattern={REGEXP_ONLY_DIGITS}
              maxLength={6}
              onChange={(value) => {
                setOtp(value);
                console.log("value", value);
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </form>
      </CardContent>
      <CardFooter>
        <Button>Resend</Button>
        <Button type="submit" form="otp-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerifyAccountForm;
