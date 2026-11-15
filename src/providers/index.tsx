"use client";

import { ReactNode } from "react";
import { GoogleAuthProvider } from "./Google-Auth.Provider";
import { QueryProvider } from "./QueryProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <GoogleAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleAuthProvider>
  );
}
