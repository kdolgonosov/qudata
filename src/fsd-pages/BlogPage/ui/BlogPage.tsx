// import { SliderItem } from "@/entities";
import { Badge, BlogCard, ContentContainer } from "@/shared/ui";
import { Header } from "@/widgets";
const mockData = [
  {
    id: 1,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 2,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 3,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 4,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 5,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 6,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
  {
    id: 7,
    author: "vast.ai",
    title: "Лучшая инвестиция для вас",
    subtitle: "Как правильно инвестировать свои деньги в GPU?",
  },
];
export const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="bg-[url(/illustrations/blog/blog-layout-decor-1.png)] bg-no-repeat bg-cover ">
        <ContentContainer className="flex flex-col py-15">
          <Badge className="self-center">Блог и статьи</Badge>
          {/* <Title order="h1">
            Узнавайте о новостях в мире GPU самыми первыми
          </Title> */}
          <h1 className="text-[48px] font-bold leading-[1.09] tracking-[-3px] text-center mx-auto max-w-[620px] mt-8 mb-20">
            Узнавайте о новостях в мире GPU самыми первыми
          </h1>
          <div className="grid grid-cols-3 gap-[28px]">
            {mockData.map((card) => (
              <BlogCard key={card.id} card={card} className="h-75" />
            ))}
            {/* <div className="border">1</div>
            <div className="border">2</div>
            <div className="border">3</div>
            <div className="border">4</div>
            <div className="border">5</div>
            <div className="border">6</div>
            <div className="border">7</div> */}
          </div>
        </ContentContainer>
      </div>
    </>
  );
};
