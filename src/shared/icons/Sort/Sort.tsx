import Icon from "icons/sort.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface SortProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const Sort = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: SortProps) => {
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

Sort.displayName = "Sort";
