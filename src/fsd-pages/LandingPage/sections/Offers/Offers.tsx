import { GpuTable } from "@/features";
import { Badge, Button, ContentContainer, Title } from "@/shared/ui";
import styles from "./Offers.module.css";

export const Offers = () => {
  return (
    <section className="pt-20 max-md:hidden max-2xl:px-4">
      <ContentContainer className="flex flex-col items-center">
        <Badge>Лучшие предложения</Badge>
        <Title
          component="h2"
          className="text-[4rem] leading-[1] mt-8 mb-20 max-2xl:text-center max-2xl:mx-auto  max-2xl:leading-[0.85] max-2xl:tracking-[-.125rem] max-2xl:text-[3rem] max-2xl:mt-14 max-2xl:mb-8 max-xl:mt-5 max-xl:mb-12 max-md:text-[1.5rem]"
        >
          Выбирайте самые выгодные мощности
        </Title>
        <div className={`w-full offers-decor ${styles.decor}`}>
          <GpuTable />
        </div>
        <Button size="lg" outline withArrow className="w-full mt-20">
          Смотреть все модели GPU
        </Button>
      </ContentContainer>
    </section>
  );
};
