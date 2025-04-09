"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SliderItem } from "@/entities";
import { Navigation } from "swiper/modules";

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
        slidesPerView={6}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="my-swiper"
      >
        {mockData.map((slide: ISlide) => (
          <SwiperSlide key={slide.id}>
            <SliderItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-[40px] mt-[33px]">
        <span className="swiper-button-prev-custom block bg-[url(/slider-nav-left-disabled.svg)] w-[20px] h-[17px] bg-center bg-contain hover:cursor-pointer"></span>
        <span className="swiper-button-next-custom block bg-[url(/slider-nav-right-enabled.svg)] w-[20px] h-[17px] bg-center bg-contain hover:cursor-pointer"></span>
        {/* <IconButton>
          <img
            src="/slider-nav-left-disabled.svg"
            alt="toggle-icon"
            className={`swiper-button-prev-custom w-[20px] h-[17px]`}
          />
        </IconButton>
        <IconButton>
          <img
            src="/slider-nav-right-enabled.svg"
            alt="toggle-icon"
            className={`swiper-button-next-custom w-[20px] h-[17px] `}
          />
        </IconButton> */}
      </div>
    </div>
  );
};
