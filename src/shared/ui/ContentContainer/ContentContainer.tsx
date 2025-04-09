interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({
  children,
  className,
}: ContentContainerProps) {
  return <div className={`max-w-content mx-auto ${className}`}>{children}</div>;
}
