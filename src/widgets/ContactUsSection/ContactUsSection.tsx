import { ContactForm } from "@/features";
import { Badge, ContentContainer, Title } from "@/shared/ui";

export const ContactUsSection = () => {
  return (
    <section className="pt-[80px] pb-[120px] form-decor ">
      <ContentContainer className="flex justify-between backdrop-blur-[60px]">
        <div className="flex flex-col gap-[48px] max-w-[593px]">
          <Badge className="self-start">Форма для связи</Badge>
          <Title order="h2">Не&nbsp;нашли&nbsp;мощности для себя?</Title>
          <span className="text-subtitle leading-[1.1]">
            Напишите&nbsp;нам&nbsp;и&nbsp;мы&nbsp;с&nbsp;радостью&nbsp;поможем&nbsp;и
            подберем вам сервер по вашим пожеланиям
          </span>
        </div>
        <ContactForm className="min-w-[540px]" />
      </ContentContainer>
    </section>
  );
};
