import { Slider } from "@/features";
import { Badge, Button, Title } from "@/shared/ui";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <section
      className={`pt-20 pb-19 flex flex-col max-2xl:px-4 ${styles.decor}`}
    >
      <Badge className="self-center mb-12">Статьи</Badge>
      <Title
        component="h2"
        className="text-h2 leading-[0.8] self-center mb-25 max-2xl:text-center max-2xl:mx-auto max-2xl:leading-[0.85] max-2xl:tracking-[-.125rem] max-2xl:text-[3rem] max-2xl:mt-14 max-2xl:mb-8 max-xl:mt-5 max-xl:mb-12 max-md:text-[1.5rem]"
      >
        Читайте больше о GPU
      </Title>
      <Slider />
      <Button size="lg" outline withArrow className=" mt-25 self-center">
        Узнать больше о GPU
      </Button>
    </section>
  );
};
