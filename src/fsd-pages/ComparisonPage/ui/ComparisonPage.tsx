import { Badge, ContentContainer, Paper } from "@/shared/ui";
import { Header } from "@/widgets";

export const ComparisonPage = () => {
  return (
    <>
      <Header />
      <div className="bg-[url(/illustrations/blog/blog-layout-decor-1.png)] bg-no-repeat bg-cover min-h-[100vh]">
        <ContentContainer className="flex flex-col">
          <Badge className="self-center">Блог и статьи</Badge>
          {/* <Title order="h1">
                        Узнавайте о новостях в мире GPU самыми первыми
                      </Title> */}
          <h1 className="text-[48px] font-bold leading-[1.09] tracking-[-3px] text-center ">
            Узнавайте о новостях в мире GPU самыми первыми
          </h1>
          <Paper variant="outer">
            <h1>Тест</h1>
            <div className="h-[1080px]"></div>
          </Paper>
        </ContentContainer>
      </div>
    </>
  );
};
