import Icon from "icons/input-message.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface InputMessageProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const InputMessage = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: InputMessageProps) => {
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

InputMessage.displayName = "InputMessage";
