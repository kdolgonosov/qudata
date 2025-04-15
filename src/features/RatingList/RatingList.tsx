/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Paper } from "@/shared/ui";
const mockData = [
  {
    id: 1,
    name: "Voltage Park",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Voltage Park",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Voltage Park",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Voltage Park",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Voltage Park",
    rating: 4.9,
  },
];
export const RatingList = () => {
  return (
    // добавить тень
    <ul className="flex flex-col gap-[12px] relative button-before-image-outline rounded-2xl">
      {mockData.map((item) => (
        <Paper
          variant="base"
          key={item.id}
          // className="p-[24px] flex items-center gap-[104px] "
        >
          {" "}
          <li
            //  key={item.id}
            className="p-[24px] flex items-center gap-[104px] text-white"
          >
            <div className="flex gap-[12px] items-center">
              <span>{item.id}</span>
              <img src="https://placehold.co/48" alt="" />
              <span>{item.name}</span>
            </div>
            <div className="flex gap-[32px] items-center">
              <div className="flex gap-[5px] items-baseline">
                <span className="inline-block bg-[url(/rating-start-icon.svg)] bg-contain bg-center bg-no-repeat w-[12px] h-[12px]"></span>
                <span>{item.rating}/5.0</span>
              </div>
              <Button size="sm">Подробнее</Button>
            </div>
          </li>
        </Paper>
        // <li
        //   key={item.id}
        //   className="p-[24px] flex items-center gap-[104px] border border-[rgba(255, 255, 255, 0.25)] rounded-[16px]"
        // >
        //   <div className="flex gap-[12px] items-center">
        //     <span>{item.id}</span>
        //     <img src="https://placehold.co/48" alt="" />
        //     <span>{item.name}</span>
        //   </div>
        //   <div className="flex gap-[32px] items-center">
        //     <div className="flex gap-[5px] items-baseline">
        //       <span className="inline-block bg-[url(/rating-start-icon.svg)] bg-contain bg-center bg-no-repeat w-[12px] h-[12px]"></span>
        //       <span>{item.rating}/5.0</span>
        //     </div>
        //     <Button size="md">Подробнее</Button>
        //   </div>
        // </li>
      ))}
    </ul>
  );
};
