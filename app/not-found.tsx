import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24">
      <div className="text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
          Oops
        </p>
        <h1 className="text-8xl sm:text-9xl font-bold text-accent mb-4" aria-hidden>
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Page not found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
