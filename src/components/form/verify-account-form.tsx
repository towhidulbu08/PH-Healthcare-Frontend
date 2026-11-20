"use client";

import { useVerifyAccount, useVerifyDoctorAccount } from "@/hooks";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { toast } from "../ui/toast";

const RESEND_COOL_DOWN = 120; // seconds

const VerifyAccountForm = ({
  mode = "patient",
}: {
  mode: "doctor" | "patient";
}) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [otp, setOtp] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [resentTimer, setResentTimer] = useState(RESEND_COOL_DOWN);
  const router = useRouter();

  const { mutate: verifyPatient, isPending: verifyPending } =
    useVerifyAccount();
  const { mutate: verifyDoctor } = useVerifyDoctorAccount();

  const verify = mode === "doctor" ? verifyDoctor : verifyPatient;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (resentTimer <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setResentTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleOtp = () => {
    if (otp.length !== 6) {
      setIsInvalid(true);
      return;
    }
    const verifyData = {
      email,
      otp,
    };
    verify(verifyData, {
      onSuccess: (res) => {
        if (!res.success) {
          toast.add({
            title: "Server Failure",
            description: "Something went wrong. Please try again",
            type: "error",
          });
        }
        if (mode === "doctor") {
          toast.add({
            title: "Verification Successful",
            description:
              "An Admin will approve your account. This may take time.Please check your email in few days",
            type: "success",
          });

          router.push("/");

          return;
        }
        toast.add({
          title: "Verification Successful",
          description: "Welcome onBoard! You can now login to your account",
          type: "success",
        });

        router.push("/");
      },
      onError: (err) => {
        toast.add({
          title: "Verification Failed",
          description: err.message || "Something went wrong. Please try again",
          type: "error",
        });
      },
    });
  };
  if (!email) {
    return null;
  }

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
          <Field data-invalid={isInvalid}>
            <FieldLabel htmlFor="otp">OTP</FieldLabel>
            <InputOTP
              autoComplete="off"
              name="otp"
              value={otp}
              id="otp"
              pattern={REGEXP_ONLY_DIGITS}
              maxLength={6}
              onChange={(value) => {
                setOtp(value);
                if (isInvalid) {
                  setIsInvalid(false);
                }
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
            {isInvalid && (
              <FieldError
                errors={[{ message: "Invalid Code.Please Try Again" }]}
              />
            )}
            <FieldDescription>
              Resend in {resentTimer} seconds{" "}
            </FieldDescription>
          </Field>
        </form>
      </CardContent>
      <CardFooter>
        <Button disabled={resentTimer > 0}>Resend</Button>
        <Button type="submit" form="otp-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerifyAccountForm;
