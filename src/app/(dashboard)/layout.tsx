import AuthGuard from "@/components/auth/auth-guard";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthGuard>
      Dashboard Layout
      {children}
    </AuthGuard>
  );
};

export default layout;
