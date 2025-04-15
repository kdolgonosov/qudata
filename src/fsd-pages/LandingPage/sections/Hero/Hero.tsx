import { Badge, Button, Title } from "@/shared/ui";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section
      className={`relative pt-[2.125rem] max-md:pt-20 max-md:bg-[#0d0f16] `}
    >
      <div
        className={`pb-[23.875rem] max-2xl:pb-50 max-lg:pb-40 max-md:pb-35 max-sm:pb-17 ${styles.decor}`}
      >
        <div className="max-w-[82.25rem] mx-auto flex flex-col items-center justify-between max-2xl:px-4">
          <Badge withArrow className="max-md:hidden">
            Идеальные решения для ваших задач на нашем маркетплейсе
          </Badge>
          <Title
            component="h1"
            className="text-center mt-16 mb-12 max-2xl:text-[4rem] max-2xl:max-w-full max-2xl:mt-14 max-2xl:mb-8 max-lg:text-[3rem] max-md:block max-md:text-[2rem] max-md:mb-5 max-md:tracking-[-0.0938rem]"
          >
            Маркетплейс GPU с анализом 200+ провайдеров каждый день
          </Title>
          <p className="text-text-color text-subtitle text-center leading-[1.1] tracking-[-.125rem] mb-24 max-w-[59.375rem] max-2xl:text-[1.5rem] max-2xl:mb-20 max-md:text-[1rem] max-md:mb-8 max-md:tracking-[-.0625rem]">
            Сравнивайте характеристики, читайте отзывы и выбирайте именно то,
            что подходит для ваших уникальных потребностей и бюджета.
          </p>
          <Button size="lg" outline withArrow>
            Присоединиться бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
};
