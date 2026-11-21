/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

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
  return <>{children}</>;
};

export default AuthGuard;
