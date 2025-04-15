"use client";
import React from "react";
import { IconButton } from "@/shared/ui";
import { cn } from "@/shared/lib/utils/cn";
import styles from "./BlogCard.module.css";
import { ArrowRightUp } from "@/shared/icons";
export type ICard = {
  id: number;
  author: string;
  title: string;
  subtitle: string;
};
interface BlogCardProps {
  card: ICard;
  className?: string;
}
export const BlogCard = ({ card, className }: BlogCardProps) => {
  const baseStyle =
    "box-border bg-gray-800 flex flex-col items-center justify-between gradient-slider-card p-8 rounded-[1.4375rem]";
  return (
    <div className={cn(baseStyle, styles.gradient_border, className)}>
      <span className="text-[1rem] leading-[1.25rem] text-white">
        {card.author}
      </span>
      <div className="flex flex-col gap-6 items-center text-center">
        <h4 className="text-[1.5rem] leading-[1]">{card.title}</h4>
        <span className="text-[1rem] leading-[1]">{card.subtitle}</span>
      </div>
      <div className="w-full flex justify-between items-center">
        <a
          href="#"
          className="text-[1rem] leading-[1.25rem] color-[#AAA] underline"
        >
          Читать подробнее
        </a>
        <IconButton>
          <ArrowRightUp width={16} height={16} color="#fff" />
        </IconButton>
      </div>
    </div>
  );
};
