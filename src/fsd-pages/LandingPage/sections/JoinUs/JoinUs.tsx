import { Button, Paper } from "@/shared/ui";
import styles from "./JoinUs.module.css";
import { cn } from "@/shared/lib/utils/cn";

export const JoinUs = () => {
  return (
    <>
      <section className={cn("py-20", styles.decor_1)}>
        <Paper variant="diamond" className="mb-10 max-w-content mx-auto">
          <div className={styles.decor_2_3}>
            <div className="flex flex-col  pt-6 pb-12 gap-16">
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-[3rem] leading-[1] text-title-color font-[600]">
                  Присоединяйтесь к{" "}
                  <span className="inline-block bg-[url(/joinus-logo-circle-bg.png)] bg-center bg-contain w-[156px] h-[156px] align-middle"></span>{" "}
                  и выбирайте лучшее
                </h2>
                <span className="text-[24px] text-center max-w-[820px]">
                  Запускайте модели машинного обучения, рендеринг и сложные
                  вычисления без инвестиций в оборудование
                </span>
              </div>
              <div className="flex justify-center gap-24">
                <div
                  className={cn(
                    "flex flex-col items-center gap-6 text-center max-w-[13.5rem]",
                    styles.joinus_side_border
                  )}
                >
                  <span className="text-title-color text-subtitle leading-[1] max-w-[11.875rem]">
                    Низкие цены
                  </span>
                  <span className="leading-[1]">
                    Мы отбираем самые выгодные предложения со всего рынка
                  </span>
                </div>
                <div
                  className={cn(
                    "flex flex-col items-center gap-6 text-center max-w-[13.5rem]",
                    styles.joinus_side_border
                  )}
                >
                  <span className="text-title-color text-subtitle leading-[1] max-w-[11.875rem]">
                    Большой выбор
                  </span>
                  <span className="leading-[1]">
                    Выбирайте необходимые мощности под свои задачи
                  </span>
                </div>
                <div className="flex flex-col items-center gap-6 text-center max-w-[13.5rem]">
                  <span className="text-title-color text-subtitle leading-[1] max-w-[11.875rem]">
                    Удобный маркетплейс
                  </span>
                  <span className="leading-[1]">
                    Фильтруйте, сортируйте и выбирайте параметры именно для себя
                  </span>
                </div>
              </div>
              <Button size="lg" outline withArrow className="self-center">
                Создать аккаунт прямо сейчас
              </Button>
            </div>
          </div>
        </Paper>
      </section>
    </>
  );
};
