interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  //   icon: string;
  //   activeIcon?: string;
  // size: "lg" | "md" | "sm";
  // outline?: boolean;
  className?: string;
}

export const IconButton = ({
  children,
  onClick,
  //   icon,
  //   activeIcon,
  // size,
  // outline = false,
  className = "",
}: IconButtonProps) => {
  return (
    <button
      className={`w-[40px] h-[40px] rounded-button-md 
                  bg-[radial-gradient(49.51%_66.03%_at_50%_92.95%,_#74ABFF_0%,_#4254FF_100%)]
                  shadow-[0_1px_25px_0_rgba(87,121,255,0.35)] hover:cursor-pointer
                  flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
      {/* <img
        src={activeIcon ? "" : icon} // По умолчанию используем icon
        alt="icon"
        className={`w-[16px] h-[16px] ${activeIcon ? "group-open:hidden" : ""}`}
      />
      {activeIcon && (
        <img
          src={activeIcon}
          alt="open-icon"
          className="w-[16px] h-[16px] hidden group-open:block"
        />
      )} */}
    </button>
  );
};
