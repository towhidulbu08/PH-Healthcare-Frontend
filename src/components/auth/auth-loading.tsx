import { LoaderIcon } from "lucide-react";

export default function AuthLoading({
  label = "Verifying account",
}: {
  label?: string;
}) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-3">
        <LoaderIcon className="animate-spin size-6" />
        <p>{label}</p>
      </div>
    </div>
  );
}
