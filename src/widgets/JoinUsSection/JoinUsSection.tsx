import {
  Button,
  ContentContainer,
  // Title
} from "@/shared/ui";

export const JoinUsSection = () => {
  return (
    <section className="pt-[80px] pb-[80px] joinus-decor-1">
      <ContentContainer className="rounded-[23px] bg-[linear-gradient(152deg,_rgba(66,_66,_66,_0.2)_0%,_rgba(0,_0,_0,_0.2)_100%)] floating-border-shadow-joinus ">
        <div className="joinus-decor-2-3">
          <div className="flex flex-col  pt-[24px] pb-[48px] gap-[64px] joinus-gradient-border">
            <div className="flex flex-col items-center gap-[32px]">
              {/* <Title order="h2">
                Присоединяйтесь к{" "}
                <span className="inline-block bg-[url(/joinus-logo-circle-bg.png)] bg-center bg-contain w-[156px] h-[156px] align-middle"></span>{" "}
                и выбирайте лучшее
              </Title> */}
              <h2 className="text-[48px] leading-[1] text-title-color font-[600]">
                Присоединяйтесь к{" "}
                <span className="inline-block bg-[url(/joinus-logo-circle-bg.png)] bg-center bg-contain w-[156px] h-[156px] align-middle"></span>{" "}
                и выбирайте лучшее
              </h2>
              <span className="text-[24px] text-center max-w-[820px]">
                Запускайте модели машинного обучения, рендеринг и сложные
                вычисления без инвестиций в оборудование
              </span>
            </div>
            <div className="flex justify-center gap-[96px]">
              <div className="flex flex-col items-center gap-[24px] text-center max-w-[216px] joinus-side-border">
                <span className="text-title-color text-subtitle leading-[1] max-w-[190px]">
                  Низкие цены
                </span>
                <span className="leading-[1]">
                  Мы отбираем самые выгодные предложения со всего рынка
                </span>
              </div>
              <div className="flex flex-col items-center gap-[24px] text-center max-w-[216px] joinus-side-border">
                <span className="text-title-color text-subtitle leading-[1] max-w-[190px]">
                  Большой выбор
                </span>
                <span className="leading-[1]">
                  Выбирайте необходимые мощности под свои задачи
                </span>
              </div>
              <div className="flex flex-col items-center gap-[24px] text-center max-w-[216px]">
                <span className="text-title-color text-subtitle leading-[1] max-w-[190px]">
                  Удобный маркетплейс
                </span>
                <span className="leading-[1]">
                  Фильтруйте, сортируйте и выбирайте параметры именно для себя
                </span>
              </div>
            </div>
            <Button size="lg" outline className="self-center">
              Создать аккаунт прямо сейчас
            </Button>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};
