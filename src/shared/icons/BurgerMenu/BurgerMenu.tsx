import Icon from "icons/burger-menu.svg";
import { cn } from "@/shared/lib/utils/cn";
import { memo, SVGProps } from "react";

interface BurgerMenuProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const BurgerMenu = memo(
  ({
    size = 24,
    className,
    width = size,
    height = size,
    ...props
  }: BurgerMenuProps) => {
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

BurgerMenu.displayName = "BurgerMenu";
