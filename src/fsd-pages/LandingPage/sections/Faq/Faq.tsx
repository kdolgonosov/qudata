import { AccordionList } from "@/shared/ui";
import { Badge, Title } from "@/shared/ui";
import styles from "./Faq.module.css";

export const Faq = () => {
  return (
    <section
      className={`pt-20 pb-[7.6875rem] overflow-visible max-2xl:px-4 ${styles.decor}`}
    >
      <div className="max-w-[62.5625rem] mx-auto">
        <div className="flex flex-col gap-8 mb-7.5">
          <Badge className="self-center">Раздел FAQ</Badge>
          <Title
            component="h2"
            className="text-h2 leading-[1] text-center max-2xl:mx-auto tracking-[-.125rem] max-2xl:text-[3rem] max-2xl:mt-14 max-2xl:mb-8 max-xl:mt-5 max-xl:mb-12 max-md:text-[1.5rem]"
          >
            Часто задаваемые вопросы
          </Title>
        </div>
        <div>
          <AccordionList />
        </div>
      </div>
    </section>
  );
};
