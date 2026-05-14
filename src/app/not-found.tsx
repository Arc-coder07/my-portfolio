import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-8xl font-bold text-accent/20">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text-primary">
          Page not found
        </h1>
        <p className="mt-2 text-text-secondary max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" icon={<ArrowLeft size={14} />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
