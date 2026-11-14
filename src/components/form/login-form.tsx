"use client";
import { useLogin } from "@/hooks";
import { LoginZodSchema } from "@/validation";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { mutate: login, isPending: loginPending } = useLogin();
  const form = useForm({
    defaultValues: {
      email: "superadmin@gmail.com",
      password: "Super@admin12345",
    },
    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };
      login(loginData, {
        onSuccess: (res) => {
          router.push("/");
        },
        onError: (err) => {
          console.log(err);
        },
      });
    },
    validators: {
      onSubmit: LoginZodSchema,
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center text-center flex-col gap-2">
        <h2 className="text-2xl font-bold">Login to your account</h2>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    autoComplete="off"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => field.handleChange(e.target.value)}
                      autoComplete="off"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      aria-invalid={isInvalid}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                    >
                      {showPassword ? (
                        <EyeClosed className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <Button type="submit">Submit</Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default LoginForm;
