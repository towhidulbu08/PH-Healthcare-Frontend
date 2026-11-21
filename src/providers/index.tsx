"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";
import { GoogleAuthProvider } from "./Google-Auth.Provider";
import { QueryProvider } from "./QueryProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <GoogleAuthProvider>
      <QueryProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryProvider>
    </GoogleAuthProvider>
  );
}
