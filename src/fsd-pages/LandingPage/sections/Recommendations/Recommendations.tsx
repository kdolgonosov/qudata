import { RatingList } from "@/features";
import { Badge, Button, ContentContainer, Title } from "@/shared/ui";

export const Recommendations = () => {
  return (
    <section className="pt-20 max-2xl:px-4 max-md:hidden">
      <ContentContainer className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-8 max-w-[34.8125rem] items-start">
            <Badge>Рекомендации</Badge>
            <Title component="h2" className="text-h2 leading-[1] ">
              Лучшие провайдеры в&nbsp;России
            </Title>
            <span className="text-[1.25rem] leading-[1.1] tracking-[-.0625rem] text-text-color">
              Ознакомьтесь и выберите для себя лучший вариант провайдер,
              основываясь на: отзывах, нашей оценке, предложениях, посещаемости
              и многому другому.
            </span>
          </div>
          <RatingList />
        </div>
        <Button size="lg" outline withArrow className="w-full mt-22">
          Смотреть все предложения
        </Button>
      </ContentContainer>
    </section>
  );
};
