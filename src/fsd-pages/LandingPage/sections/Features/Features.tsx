import { Badge, Button, ContentContainer, Title } from "@/shared/ui";
import { cn } from "@/shared/lib/utils/cn";
import styles from "./Features.module.css";

export const Features = () => {
  return (
    <section className={`pt-20 pb-15 max-2xl:px-4  ${styles.decor_1}`}>
      <ContentContainer className="flex flex-col items-start">
        <Badge className="max-2xl:self-center">Наши преимущества</Badge>
        <Title
          component="h2"
          className="text-[4rem] leading-[1] max-w-[33.1875rem] mt-8 mb-20 max-2xl:hidden"
        >
          Почему&nbsp;именно QuData?
        </Title>
        <Title
          component="h2"
          className="hidden text-center mx-auto tracking-[-.125rem] max-2xl:inline  max-2xl:text-[3rem] max-2xl:mt-14 max-2xl:mb-8 max-xl:mt-5 max-xl:mb-12 max-md:text-[1.5rem]"
        >
          Почему выбирают именно нас?
        </Title>
        <div
          className={`grid gap-[1.25rem] grid-cols-[minmax(0,_30rem)_minmax(0,_17.5rem)_minmax(0,_40rem)] max-xl:grid-cols-1 max-xl:max-w-[47.9375rem] max-xl:mx-auto max-md:gap-3 ${styles.decor_2_3}`}
        >
          <div
            className={cn(
              styles.gradient_border_base,
              styles.gradient_features_card_1
            )}
          >
            <div
              className={`h-[40.6875rem] rounded-[1.4375rem] backdrop-blur-[3.75rem] max-xl:h-[31.25rem] max-lg:h-[25rem] max-md:h-[18.75rem] max-sm:h-[11.625rem] max-xl:flex max-xl:justify-end ${styles.decorCard_1_1_2}`}
            >
              <div className="flex flex-col gap-[2.5rem] max-lg:gap-[1.125rem] text-center max-w-[18.625rem] max-lg:max-w-[19.375rem] mx-auto mt-[2rem] max-xl:m-0 max-xl:py-8 max-xl:px-6 max-xl:max-w-[18.75rem] max-xl:items-end max-xl:justify-center">
                <Title
                  component="h3"
                  className="text-[2.25rem] leading-[1]  max-xl:text-right max-lg:text-[2rem] max-lg:text-right max-lg:inline max-sm:text-[1.25rem]"
                >
                  Комплексный анализ глобальных рынков
                </Title>
                <span className="text-[1.25rem] leading-[1.3] text-text-color max-lg:hidden">
                  Находим и рекомендуем самые выгодные и лучшие
                  GPU-мощности&nbsp;для&nbsp;вас&nbsp;и&nbsp;ваших&nbsp;задач
                </span>
                <span className="hidden text-[1.25rem] leading-[1.3] tracking-[-.0625rem] text-text-color max-lg:inline max-xl:text-right max-sm:text-[1rem]">
                  Ваши данные и проекты под надежной защитой с шифрованием и
                  изолированными средами.
                </span>
              </div>
            </div>
          </div>

          <div
            className={`h-[40.6875rem] border border-[#747474] rounded-[1.4375rem] backdrop-blur-[3.75rem] max-xl:h-[25rem] max-lg:h-[18.75rem] max-md:h-[12.5rem] max-sm:h-[6.75rem] ${styles.decorCard_2}`}
          ></div>
          <div className="flex flex-col gap-[1.25rem] ">
            <div
              className={cn(
                styles.gradient_border_base,
                styles.gradient_features_card_3
              )}
            >
              <div
                className={`h-[15.625rem] rounded-[1.4375rem] backdrop-blur-[3.75rem] max-xl:h-[31.25rem] max-lg:h-[25rem] max-md:h-[18.75rem] max-sm:h-[12.9375rem] ${styles.decorCard_3_1_2}`}
              >
                <div className="flex flex-col gap-[2.5rem] max-lg:gap-[1.125rem] max-w-[18.625rem] mt-8 ml-8 ">
                  <Title
                    component="h3"
                    className="text-[2rem] leading-[1]  max-lg:hidden "
                  >
                    Таблица&nbsp;сравнений
                  </Title>
                  <Title
                    component="h3"
                    className="hidden max-lg:inline max-lg:text-[2rem] max-lg:text-left max-sm:text-[1.25rem]"
                  >
                    Таблица&nbsp;сравнений
                  </Title>
                  <span className="text-[1.25rem] leading-[1.3] text-text-color">
                    Изучайте и сравнивайте между собой GPU и их провайдеров по
                    всевозможным фильтрам
                  </span>
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.gradient_border_base,
                styles.gradient_features_card_4
              )}
            >
              <div
                className={`h-[23.8125rem] rounded-[1.4375rem] flex items-center backdrop-blur-[3.75rem] max-xl:h-[31.25rem] max-lg:h-[25rem] max-md:h-[18.75rem] max-sm:h-[11.625rem] ${styles.decorCard_4}`}
              >
                <div className="flex flex-col gap-10 max-lg:gap-4.5 text-center items-center">
                  <Title
                    component="h3"
                    className="text-[2rem] leading-[1] tracking-[-.125rem] max-lg:hidden"
                  >
                    Присоединяйтесь к платформе и контролируйте динамику цен в
                    реальном времени!
                  </Title>
                  <Title
                    component="h3"
                    className="hidden text-[2rem] leading-[1] tracking-[-.125rem] text-left max-lg:inline max-sm:text-[1.25rem]"
                  >
                    Удобный и практичный интерфейс маркетплейса
                  </Title>
                  <Button size="md" outline withArrow>
                    Попробовать бесплатно
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};
