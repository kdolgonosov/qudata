import { AccordionList } from "@/features";
import { Badge, ContentContainer, Title } from "@/shared/ui";

export const FaqSection = () => {
  return (
    <section className="pt-[80px] pb-[80px] faq-decor overflow-visible">
      <ContentContainer className="max-w-[1001px] flex flex-col gap-[120px]">
        <div className="flex flex-col gap-[32px]">
          <Badge className="self-center">Раздел FAQ</Badge>
          <Title order="h2" className="text-center">
            Часто задаваемые вопросы
          </Title>
        </div>
        <div>
          <AccordionList />
        </div>
      </ContentContainer>
    </section>
  );
};
