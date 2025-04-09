import { Slider } from "@/features";
import { Badge, Button, Title } from "@/shared/ui";

export const BlogSection = () => {
  return (
    <section className="pt-[80px] pb-[76px] flex flex-col learn-decor-test">
      <Badge className="self-center mb-[48px]">Статьи</Badge>
      <Title order="h2" className="self-center mb-[100px]">
        Читайте больше о GPU
      </Title>
      <Slider />
      <Button size="lg" outline className=" mt-[100px] self-center">
        Узнать больше о GPU
      </Button>
    </section>
  );
};
