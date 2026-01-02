import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable wrapper component for consistent horizontal padding across sections.
 * Desktop: 80px (5rem) left/right padding
 * Mobile/Tablet: 40px (2.5rem) left/right padding
 */
export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={cn("px-10 lg:px-20", className)}>
      {children}
    </div>
  );
}
