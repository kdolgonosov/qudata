/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { IconButton } from "@/shared/ui";

export type ISlide = {
  id: number;
  author: string;
  title: string;
  subtitle: string;
};
interface SlideProps {
  slide: ISlide;
}
export const SliderItem = ({ slide }: SlideProps) => {
  return (
    <div className="h-[420px] w-[300px] p-[32px] rounded-[23px] box-border bg-gray-800 flex flex-col items-center justify-between gradient-slider-card">
      <span className="text-[16px] leading-[20px] text-white">
        {slide.author}
      </span>
      <div className="flex flex-col gap-[24px] items-center text-center">
        <h4 className="text-[24px] leading-[1]">{slide.title}</h4>
        <span className="text-[16px] leading-[1]">{slide.subtitle}</span>
      </div>
      <div className="w-full flex justify-between items-center">
        <a
          href="#"
          className="text-[16px] leading-[20px] color-[#AAA] underline"
        >
          Читать подробнее
        </a>
        <IconButton>
          {" "}
          <img
            src="/arrow-right-up-icon.svg"
            alt="toggle-icon"
            className={`w-[12px] h-[12px]`}
          />
        </IconButton>
      </div>
    </div>
  );
};
