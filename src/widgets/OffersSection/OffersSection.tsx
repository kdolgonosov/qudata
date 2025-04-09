import { GpuTable } from "@/features";
import { Badge, Button, ContentContainer, Title } from "@/shared/ui";

export const OffersSection = () => {
  return (
    <section className="pt-[80px]">
      <ContentContainer className="flex flex-col items-center">
        <Badge>Лучшие предложения</Badge>
        <Title order="h2" className="mt-[32px] mb-[80px]">
          Выбирайте самые выгодные мощности
        </Title>
        <div className="w-full offers-decor">
          <GpuTable />
        </div>
        <Button size="lg" outline className="w-full mt-[80px]">
          Смотреть все модели GPU
        </Button>
      </ContentContainer>
    </section>
  );
};
