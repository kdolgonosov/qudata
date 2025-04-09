import { RatingList } from "@/features";
import { Badge, Button, ContentContainer, Title } from "@/shared/ui";

export const RecommendationsSection = () => {
  return (
    <section className="pt-[80px]">
      <ContentContainer className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-[32px] max-w-[557px] items-start">
            <Badge>Рекомендации</Badge>
            <Title order="h2">Лучшие провайдеры в России</Title>
            <span className="text-[20px] leading-[1.1] text-text-color">
              Ознакомьтесь и выберите для себя лучший вариант провайдер,
              основываясь на: отзывах, нашей оценке, предложениях, посещаемости
              и многому другому.
            </span>
          </div>
          <RatingList />
        </div>
        <Button size="lg" outline className="w-full mt-[88px]">
          Смотреть все предложения
        </Button>
      </ContentContainer>
    </section>
  );
};
