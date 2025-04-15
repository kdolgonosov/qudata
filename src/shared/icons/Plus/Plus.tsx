import Icon from "icons/plus.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface PlusProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const Plus = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: PlusProps) => {
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

Plus.displayName = "Plus";
