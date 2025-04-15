import Icon from "icons/arrow-wide-left.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface ArrowWideLeftProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const ArrowWideLeft = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: ArrowWideLeftProps) => {
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

ArrowWideLeft.displayName = "ArrowWideLeft";
