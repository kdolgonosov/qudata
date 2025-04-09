/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { IconButton } from "@/shared/ui";

export const AccordionList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Что такое QuData?",
      answer:
        "Ваши данные и проекты под надежной защитой с lorem ipsum шифрованием и изолированными средами.",
    },
    {
      question: "Какие операционные системы доступны?",
      answer:
        "Ваши данные и проекты под надежной защитой с lorem ipsum шифрованием и изолированными средами.",
    },
    {
      question: "Как быстро запускается инстанс?",
      answer:
        "Ваши данные и проекты под надежной защитой с lorem ipsum шифрованием и изолированными средами.",
    },
    {
      question: "Как добавить в избранное GPU?",
      answer:
        "Ваши данные и проекты под надежной защитой с lorem ipsum шифрованием и изолированными средами.",
    },
    {
      question: "В чем преимущества QuData?",
      answer:
        "Ваши данные и проекты под надежной защитой с lorem ipsum шифрованием и изолированными средами.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-[24px] px-[32px] gradient-border-faq backdrop-blur-[12px] min-h-[600px]">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`${
            index < faqItems.length - 1 ? "bottom-border" : ""
          } p-[32px] overflow-hidden`}
        >
          <div
            className={`text-title-color text-[24px] pl-[23px] flex justify-between items-center faq-item-pin ${
              openIndex === index ? "faq-item-pin_opened" : ""
            }`}
          >
            {item.question}
            <IconButton onClick={() => handleToggle(index)}>
              <img
                src="/plus-icon.svg"
                alt="toggle-icon"
                className={`w-[16px] h-[16px] transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </IconButton>
          </div>
          <div
            className={`text-text-color mt-[24px] ${
              openIndex === index ? "max-h-[96px]" : "max-h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
