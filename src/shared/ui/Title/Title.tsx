import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  order?: HeadingTag;
  leading?: string;
  className?: string;
  children: React.ReactNode;
}

export const Title = ({
  order = "h1",
  leading = "1",
  className,
  children,
}: TitleProps) => {
  const Tag = order;

  return (
    <Tag
      className={`text-${order} leading-[${leading}] text-title-color font-[600] ${className}`}
    >
      {children}
    </Tag>
  );
};
