import { Badge, Button, Title } from "@/shared/ui";

export const HeroSection = () => {
  return (
    <section className="relative pt-[34px] pb-[380px] hero-before-image-lines hero-decor-2">
      <div className="max-w-[1316px] mx-auto flex flex-col items-center justify-between h-[667px]">
        <Badge>Идеальные решения для ваших задач на нашем маркетплейсе</Badge>
        <Title order="h1" leading="0.85" className="text-center">
          Маркетплейс GPU с анализом&nbsp;200+&nbsp;провайдеров каждый день
        </Title>
        <p className="text-text-color text-subtitle text-center max-w-[950px]">
          Сравнивайте характеристики, читайте отзывы и выбирайте именно то, что
          подходит для ваших уникальных потребностей и бюджета.
        </p>
        <Button size="lg" outline>
          Присоединиться бесплатно&nbsp;&#10230;
        </Button>
      </div>
    </section>
  );
};
