import { Badge, Button, ContentContainer, Title } from "@/shared/ui";

export const FeaturesSection = () => {
  return (
    <section className="relative features-decor-1 pt-[80px] pb-[60px]">
      <ContentContainer className="flex flex-col items-start">
        <Badge>Наши преимущества</Badge>
        <Title
          order="h2"
          leading="0.85"
          className="max-w-[531px] mt-[32px] mb-[80px]"
        >
          Почему&nbsp;именно QuData?
        </Title>
        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[minmax(0,_480px)_minmax(0,_280px)_minmax(0,_640px)] relative features-decor-2-3">
          <div className="gradient-features-card-1">
            <div className="h-[651px] rounded-[23px] relative features-decor-card1-1-2 backdrop-blur-[60px]">
              <div className="flex flex-col gap-[40px] text-center max-w-[298px] mx-auto mt-[32px]">
                <Title order="h3">Комплексный анализ глобальных рынков</Title>
                <span className="text-[20px] leading-[1.3] text-text-color">
                  Находим и рекомендуем самые выгодные и лучшие
                  GPU-мощности&nbsp;для&nbsp;вас&nbsp;и&nbsp;ваших&nbsp;задач
                </span>
              </div>
            </div>
          </div>

          <div className="h-[651px] border border-[#747474] rounded-[23px] features-decor-card2 backdrop-blur-[60px]"></div>
          <div className="flex flex-col gap-[20px] ">
            <div className="gradient-features-card-3">
              <div className=" h-[250px] rounded-[23px] features-decor-card3-1-2 backdrop-blur-[60px]">
                <div className="flex flex-col gap-[40px] max-w-[298px] mt-[32px] ml-[32px]">
                  {/* <Title order="h3">Таблица сравнений</Title> */}
                  <h3 className="text-[32px] leading-[1] text-title-color font-[600]">
                    Таблица&nbsp;сравнений
                  </h3>
                  <span className="text-[20px] leading-[1.3] text-text-color">
                    Изучайте и сравнивайте между собой GPU и их провайдеров по
                    всевозможным фильтрам
                  </span>
                </div>
              </div>
            </div>
            <div className="gradient-features-card-4">
              <div className=" h-[381px] rounded-[23px] flex items-center features-decor-card4 backdrop-blur-[60px]">
                <div className="flex flex-col gap-[40px] text-center items-center">
                  {/* <Title order="h3">
                    Присоединяйтесь к платформе и контролируйте динамику цен в
                    реальном времени!
                  </Title> */}
                  <h3 className="text-[32px] leading-[1] text-title-color font-[600]">
                    Присоединяйтесь к платформе и контролируйте динамику цен в
                    реальном времени!
                  </h3>
                  <Button size="md" outline>
                    Присоединиться прямо сейчас
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
