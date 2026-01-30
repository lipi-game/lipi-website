import { Link } from "react-router-dom";
import { useSEO } from "@/shared/hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Lipi Games",
    description: "The page you are looking for could not be found. Return to the Lipi Games homepage to explore our educational word games.",
    noIndex: true,
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <Link to="/" className="inline-block text-primary hover:underline">
          Go home
        </Link>
      </div>
    </main>
  );
}
