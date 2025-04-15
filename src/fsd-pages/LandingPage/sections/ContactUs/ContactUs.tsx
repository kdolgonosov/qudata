import { ContactForm } from "@/features";
import { Badge, ContentContainer, Title } from "@/shared/ui";
import styles from "./ContactUs.module.css";

export const ContactUs = () => {
  return (
    <section className={`pt-20 pb-30 form-decor ${styles.decor}`}>
      <ContentContainer className="flex justify-between">
        <div className="flex flex-col gap-12 max-w-[37.0625rem]">
          <Badge className="self-start">Форма для связи</Badge>
          <Title component="h2" className="text-h2 leading-[1]">
            Не&nbsp;нашли&nbsp;мощности для себя?
          </Title>
          <span className="text-subtitle leading-[1.1] tracking-[-.125rem]">
            Напишите&nbsp;нам&nbsp;и&nbsp;мы&nbsp;с&nbsp;радостью&nbsp;поможем&nbsp;и
            подберем вам сервер по вашим пожеланиям
          </span>
        </div>
        <ContactForm className="min-w-[33.75rem]" />
      </ContentContainer>
    </section>
  );
};
