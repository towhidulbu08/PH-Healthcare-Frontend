"use client";

import { useSearchParams } from "next/navigation";

const VerifyAccountForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return <div>User email: {email}</div>;
};

export default VerifyAccountForm;
