interface ButtonProps {
  children: React.ReactNode;
  size: "lg" | "md" | "sm";
  outline?: boolean;
  className?: string;
}

export const Button = ({
  children,
  size,
  outline = false,
  className = "",
}: ButtonProps) => {
  return (
    <a
      className={`text-button-${size} rounded-button-${size} py-button-py-${size} px-button-px-${size} text-title-color text-center  ${
        outline ? "relative floating-border" : ""
      } bg-[radial-gradient(49.51%_66.03%_at_50%_92.95%,_#74ABFF_0%,_#4254FF_100%)]
       shadow-[0_1px_25px_0_rgba(87,121,255,0.35)] hover:cursor-pointer 
       ${className}`}
    >
      {children}
    </a>
  );
};
