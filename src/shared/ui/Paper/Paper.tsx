import React from "react";
import { cn } from "@/shared/lib/utils/cn";
import styles from "./Paper.module.css";

interface PaperProps {
  children: React.ReactNode;
  variant: "table" | "outer" | "base" | "diamond";
  className?: string;
}
export const Paper = ({ variant, className, children }: PaperProps) => {
  const baseStyle = "w-full rounded-[1.4375rem]";
  const map = {
    diamond: {
      bg: styles.paper_bg_diamond,
      border: styles.paper_border_diamond,
      floatingBorder: styles.floating_border_lg,
    },
    outer: {
      bg: styles.paper_bg_outer,
      border: styles.paper_border_outer,
      floatingBorder: false,
    },
    table: {
      bg: styles.paper_bg_table,
      border: styles.paper_border_table,
      floatingBorder: false,
    },
    base: {
      bg: styles.paper_bg_base,
      border: styles.paper_border_base,
      floatingBorder: false,
    },
  };
  const { bg, border, floatingBorder } = map[variant];
  return (
    <div className={cn(baseStyle, floatingBorder && floatingBorder, className)}>
      <div className={cn(bg, border, styles.gradient_border_base)}>
        {children}
      </div>
    </div>
  );
};
