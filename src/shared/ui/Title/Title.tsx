import { cn } from "@/shared/lib/utils/cn";
import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  component?: HeadingTag;
  leading?: string;

  className?: string;
  children: React.ReactNode;
}

export const Title = ({
  component = "h1",
  className,
  children,
}: TitleProps) => {
  const Tag = component;
  const baseStyle = "text-title leading-title tracking-title font-bold";
  const gradient =
    "bg-[radial-gradient(ellipse_100%_15%_at_bottom,#a7a7a7_0%,#fff_100%)] bg-clip-text text-transparent";
  return <Tag className={cn(baseStyle, gradient, className)}>{children}</Tag>;
};
