export const Badge = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <button
      className={`text-badge grow-0 text-title-color leading-none rounded-[100px] px-[24px] py-[12px] backdrop-blur-[2.5px] gradient-border-badge ${className}`}
    >
      {children}
    </button>
  );
};
