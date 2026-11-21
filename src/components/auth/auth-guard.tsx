/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import AuthLoading from "./auth-loading";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { data, isPending, isError } = useGetMe();
  console.log("data", data);
  const user = data?.data;
  const router = useRouter();
  useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user]);
  if (isPending) return <AuthLoading />;
  if (isError || !user) return <AuthLoading label="Redirecting..." />;
  return <>{children}</>;
};

export default AuthGuard;
