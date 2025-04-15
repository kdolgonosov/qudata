import { cn } from "@/shared/lib/utils/cn";
import styles from "./Badge.module.css";
import { ArrowRight } from "@/shared/icons";

export const Badge = ({
  children,
  withArrow,
  className = "",
}: {
  children: string;
  withArrow?: boolean;
  className?: string;
}) => {
  const baseStyle =
    "text-badge tracking-[-.0625rem] max-md:text-[.75rem] flex gap-2.5 items-center grow-0 text-title-color leading-none rounded-[6.25rem] px-6 max-md:px-3 py-3 max-md:py-[.375rem] backdrop-blur-[.1563rem] bg-[#A8A8A8]/2";
  return (
    <span className={cn(baseStyle, styles.gradient_border_badge, className)}>
      {children} {withArrow && <ArrowRight width={16} height={16} />}
    </span>
  );
};
