import Icon from "icons/input-email.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface InputEmailProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const InputEmail = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: InputEmailProps) => {
    return (
      <Icon
        width={width}
        height={height}
        className={cn("shrink-0", className)}
        {...props}
      />
    );
  }
);

InputEmail.displayName = "InputEmail";
