import Icon from "icons/arrow-wide-right.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface ArrowWideRightProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const ArrowWideRight = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: ArrowWideRightProps) => {
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

ArrowWideRight.displayName = "ArrowWideRight";
