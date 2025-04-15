import Icon from "icons/arrow-right-up.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface ArrowRightUpProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const ArrowRightUp = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: ArrowRightUpProps) => {
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

ArrowRightUp.displayName = "ArrowRightUp";
