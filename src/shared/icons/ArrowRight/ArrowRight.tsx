import Icon from "icons/arrow-right.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const ArrowRight = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: ArrowRightProps) => {
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

ArrowRight.displayName = "ArrowRight";
