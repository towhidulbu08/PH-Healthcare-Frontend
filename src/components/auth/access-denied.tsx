import { ShieldAlert } from "lucide-react";
import Link from "next/link";

const AccessDenied = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex gap-3">
        <div className="bg-red-300 rounded-full p-4">
          <ShieldAlert className=" size-8 ptext-500" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            You do not have access to this page
          </h1>
          <p>
            Go back to{" "}
            <Link className="underline" href={"/"}>
              Home
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
