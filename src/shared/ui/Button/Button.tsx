import { cn } from "@/shared/lib/utils/cn";
import { ArrowRight } from "@/shared/icons";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  size: "lg" | "md" | "sm";
  href?: string;
  outline?: boolean;
  withArrow?: boolean;
  className?: string;
}

export const Button = ({
  children,
  size,
  href,
  outline = false,
  withArrow = false,
  className = "",
}: ButtonProps) => {
  const baseStyle =
    "z-1 flex justify-center items-center gap-2.5 text-title-color text-center hover:cursor-pointer";
  const sizesMap = {
    button: {
      sm: "text-button-sm rounded-button-sm py-button-py-sm px-button-px-sm ",
      md: "text-button-md rounded-button-md py-button-py-md px-button-px-md max-md:text-[10px] max-md:rounded-[4px] max-md:py-[5.5px] max-md:px-[12px]",
      lg: "text-button-lg rounded-button-lg py-button-py-lg px-button-px-lg max-md:text-[16px] max-md:rounded-[8px] max-md:py-[16px] max-md:px-[12px]",
    },
    icon: {
      sm: "",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    },
  };
  const classes = cn(
    baseStyle,
    sizesMap.button[size],
    outline && styles.floating_border,
    styles.gradient,
    styles.shadow,
    className
  );
  return href ? (
    <a className={classes} href={href}>
      {children}
      {withArrow && <ArrowRight width={20} height={20} />}
    </a>
  ) : (
    <button className={classes}>
      {children} {withArrow && <ArrowRight width={20} height={20} />}
    </button>
  );
};
