import Icon from "icons/input-name.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface InputNameProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const InputName = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: InputNameProps) => {
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

InputName.displayName = "InputName";
