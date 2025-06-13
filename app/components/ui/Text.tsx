import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingsProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const variantClasses: Record<NonNullable<HeadingsProps["variant"]>, string> = {
  h1: " max-[300px]:text-3xl text-4xl md:text-5xl font-semibold",
  h2: "text-5xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-des text-sm md:text-[18px]",
};

const Text = ({ children, variant = "h2", className = "" }: HeadingsProps) => {
  const Tag = variant;

  return (
    <Tag className={cn(variantClasses[variant], className)}>{children}</Tag>
  );
};

export default Text;
