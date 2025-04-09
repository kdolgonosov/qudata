import { ContentContainer } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-dimmed-12">
      <ContentContainer className="grid grid-cols-[minmax(0,_273px)_minmax(0,_230px)_minmax(0,_285px)_minmax(0,_304px)_minmax(0,_348px)] border-l border-r border-dimmed-12">
        <div className="flex flex-col items-center border-r border-dimmed-12">
          <div className="flex flex-col gap-[32px] pt-[64px] ">
            <a href="#" className="bg-[url(/logo.svg)] w-[145px] h-[39px]"></a>
            <span>&copy;&nbsp;QuData, 2025</span>
          </div>
        </div>
        <div className="flex flex-col items-center border-r border-dimmed-12">
          <div className="pt-[64px]">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-[32px]">
              Общее
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] text-[16px] text-white leading-[1] ">
                <li>
                  <a href="#">Цены</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="#">Документация</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className="pt-[64px] flex flex-col"> */}

        <div className="flex flex-col items-center border-r border-dimmed-12">
          <div className="pt-[64px]">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-[32px]">
              Социальные сети
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] text-[16px] text-white leading-[1] ">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className="pt-[64px] flex flex-col"> */}
        <div className="flex flex-col items-center border-r border-dimmed-12">
          <div className="pt-[64px]">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-[32px]">
              Для разработчиков
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] text-[16px] text-white leading-[1] ">
                <li>
                  <a href="#">Документация</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className="pt-[64px] flex flex-col"> */}
        <div className="flex flex-col ">
          <div className="p-[64px]">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-[32px]">
              Связаться
            </h4>
            <a
              href="mailto:qudata@info.ru"
              className="text-[16px] text-white leading-[1]"
            >
              qudata@info.ru
            </a>
          </div>
          <div className="py-[50px] px-[64px] flex flex-col gap-[32px] border-t border-dimmed-12 text-[16px] leading-[1] text-dimmed-25">
            <a href="">Политика&nbsp;конфиденциальности</a>
            <a href="">Договор&nbsp;оферты</a>
          </div>
        </div>
      </ContentContainer>
      <span className="py-[48px] flex justify-center text-[14px] text-dimmed-40 leading-[16px] border-t border-dimmed-12">
        &copy; Все права защищены. 2025, Москва
      </span>
    </footer>
  );
};
