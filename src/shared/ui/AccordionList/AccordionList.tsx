"use client";
import { useState } from "react";
import { IconButton } from "@/shared/ui";
import { motion } from "motion/react";
import styles from "./AccordionList.module.css";
import { cn } from "@/shared/lib/utils/cn";
import { Plus } from "@/shared/icons";

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
  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <div
      className={cn(
        "w-full pt-[24px] px-[32px] backdrop-blur-[12px]",
        styles.gradient_border_faq
      )}
    >
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`${
            index < faqItems.length - 1 ? styles.bottom_border : ""
          } px-[32px] pt-[24px] 
            overflow-hidden `}
        >
          <div
            className={cn(
              "text-title-color text-[24px] pl-[23px] flex justify-between items-center faq-item-pin",
              styles.faq_item_pin,
              openIndex === index && styles.faq_item_pin_opened
            )}
          >
            {item.question}
            <IconButton onClick={() => handleToggle(index)}>
              <Plus
                width={16}
                height={16}
                className={cn(
                  "transition-transform duration-100 ease-in-out",
                  openIndex === index ? "rotate-45" : "rotate-0"
                )}
              />
            </IconButton>
          </div>
          <motion.div
            layout
            key={index}
            variants={variants}
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === index ? "open" : "closed"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-text-color mt-[24px] mb-[24px] overflow-hidden"
          >
            <p>{item.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
