"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BlogCard } from "@/shared/ui";
import { ArrowWideLeft, ArrowWideRight } from "@/shared/icons";

type ISlide = {
  id: number;
  author: string;
  title: string;
  subtitle: string;
};
const mockData = [
  {
    id: 1,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 2,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 3,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 4,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 5,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 6,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 7,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
];
export const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
          1800: {
            slidesPerView: 6,
          },
        }}
        // centeredSlidesBounds
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="my-swiper"
      >
        {mockData.map((slide: ISlide) => (
          <SwiperSlide key={slide.id}>
            <BlogCard card={slide} className="h-105" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-[40px] mt-[33px]">
        <button className="swiper-button-prev-custom group">
          <ArrowWideLeft color="#333333" />
        </button>
        <button className="swiper-button-next-custom group">
          <ArrowWideRight />
        </button>
      </div>
    </div>
  );
};
