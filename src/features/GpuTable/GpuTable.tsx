import React from "react";
import { Button } from "@/shared/ui";
import { Sort } from "@/shared/icons";

const mockData = [
  {
    id: 1,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
      icon: "https://placehold.co/60",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 2,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 3,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 4,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 5,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 6,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
  {
    id: 7,
    model_cpu: "H100",
    hoster: {
      id: 1,
      name: "Voltage Park",
    },
    count_gpu: 1,
    ram_gpu: 80,
    rent_per_hour: 93.3,
  },
];

const rows = mockData.map((item, id) => {
  return (
    <tr
      key={item.id}
      className={`h-[43px] ${id < mockData.length - 1 ? "bottom-border" : ""}`}
    >
      <td className="underline text-left">{item.model_cpu}</td>
      <td className="underline flex gap-2 items-center">
        <Sort width={14} height={14} color="#fff" />
        {item.hoster.name}
      </td>
      <td className=" text-center">{item.count_gpu}</td>
      <td className=" text-center">{item.ram_gpu}GB</td>
      <td className=" text-center">{item.rent_per_hour}&#x20bd;</td>
      <td className="flex justify-end text-right ">
        <Button size="sm" href="#" className="">
          Аренда
        </Button>
      </td>
    </tr>
  );
});
export const GpuTable = () => {
  return (
    // <table className="p-[24px] border-separate border-2 border-amber-200">
    // <div></div>
    <table className="p-[24px] rounded-[16px] border border-separate w-full relative floating-border floating-border-shadow">
      <thead className="text-[12px]  border-red-200">
        <tr className="text-[12px] leading-[15px] bottom-border">
          <th scope="col" className="text-start pb-[24px]">
            Модель GPU{" "}
            <button className="bg-[url(/icons/filter.svg)] bg-contain w-3.5 h-3.5 ml-1"></button>
          </th>
          <th scope="col" className="text-start pb-[24px]">
            Хостер{" "}
            <button className="bg-[url(/icons/filter.svg)] bg-contain w-3.5 h-3.5 ml-1"></button>
          </th>
          <th scope="col" className="text-center pb-[24px]">
            Кол-во GPU{" "}
            <button className="bg-[url(/icons/filter.svg)] bg-contain w-3.5 h-3.5 ml-1"></button>
          </th>
          <th scope="col" className="text-center pb-[24px]">
            ОЗУ GPU{" "}
            <button className="bg-[url(/icons/filter.svg)] bg-contain w-3.5 h-3.5 ml-1"></button>
          </th>
          <th scope="col" className="text-center pb-[24px]">
            Аренда в час{" "}
            <button className="bg-[url(/icons/filter.svg)] bg-contain w-3.5 h-3.5 ml-1"></button>
          </th>
          <th scope="col" className="text-end pb-[24px]">
            Действия
          </th>
        </tr>
      </thead>
      <tbody className="text-[16px]">{rows}</tbody>
    </table>
  );
};
