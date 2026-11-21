/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import { useGetMe } from "@/hooks";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import AccessDenied from "./access-denied";
import AuthLoading from "./auth-loading";

interface IProps {
  children: ReactNode;
  roles: UserRole[];
}

const RoleGuard = ({ children, roles }: IProps) => {
  const { data, isPending, isError } = useGetMe();
  console.log("data", data);
  const user = data?.data;
  const isAuthorized = !!user && roles.includes(user.role);
  const router = useRouter();
  useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user]);

  if (isAuthorized) {
    return <>{children}</>;
  }

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading label="Redirecting..." />;
  }
  return <AccessDenied />;
};

export default RoleGuard;
