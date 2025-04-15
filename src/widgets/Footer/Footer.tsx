import { ContentContainer } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-dimmed-12 max-2xl:px-4">
      <div className="flex-col items-center border-r border-dimmed-12 hidden max-2xl:flex max-2xl:border-l max-2xl:border-b max-2xl:items-center">
        <div className="flex flex-col gap-3 py-6">
          <a
            href="#"
            className="bg-[url(/logo.svg)] bg-contain w-[145px] h-[39px] max-sm:w-[89px] max-sm:h-[24px]"
          ></a>
          <span className="text-[14px] leading-[16px] text-center max-sm:text-[12px]">
            &copy;&nbsp;QuData, 2025
          </span>
        </div>
      </div>
      <ContentContainer className="grid grid-cols-[minmax(0,_273px)_minmax(0,_230px)_minmax(0,_285px)_minmax(0,_304px)_minmax(0,_348px)] border-l border-r border-dimmed-12 max-2xl:grid-cols-4 max-xl:flex max-xl:justify-between max-xl:px-4 max-xl:py-4">
        <div className="flex flex-col items-center border-r border-dimmed-12 max-2xl:hidden">
          <div className="flex flex-col gap-[32px] pt-[64px]">
            <a href="#" className="bg-[url(/logo.svg)] w-[145px] h-[39px]"></a>
            <span className="text-[14px] leading-[16px]">
              &copy;&nbsp;QuData, 2025
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center border-r border-dimmed-12 max-xl:border-0">
          <div className="pt-[64px] max-xl:p-0">
            <h4 className="text-h4 max-sm:text-[16px] text-dimmed-25 leading-[1] mb-8 max-xl:mb-4">
              Общее
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] max-sm:gap-[12px] text-[16px] max-sm:text-[12px] text-white leading-[1] ">
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

        <div className="flex flex-col items-center border-r border-dimmed-12 max-xl:border-0">
          <div className="pt-[64px] max-xl:p-0">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-8 max-xl:mb-4 max-lg:hidden">
              Социальные сети
            </h4>
            <h4 className="hidden text-h4 max-sm:text-[16px] text-dimmed-25 leading-[1] mb-8 max-xl:mb-4 max-lg:block">
              Соц.&nbsp;сети
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] max-sm:gap-[12px] text-[16px] max-sm:text-[12px] text-white leading-[1] ">
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
        <div className="flex flex-col items-center border-r border-dimmed-12 max-xl:hidden">
          <div className="pt-[64px]">
            <h4 className="text-h4 text-dimmed-25 leading-[1] mb-8">
              Для разработчиков
            </h4>
            <nav>
              <ul className="flex flex-col gap-[24px] max-sm:gap-[12px] text-[16px] text-white leading-[1] ">
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
          <div className="p-[64px] max-xl:p-0">
            <h4 className="text-h4 max-sm:text-[16px] text-dimmed-25 leading-[1] mb-8 max-xl:mb-4">
              Связаться
            </h4>
            <a
              href="mailto:qudata@info.ru"
              className="text-[16px] max-sm:text-[12px] text-white leading-[1]"
            >
              qudata@info.ru
            </a>
          </div>
          <div className="py-[50px] px-[64px] flex flex-col gap-[32px] border-t border-dimmed-12 text-[16px] leading-[1] text-dimmed-25 max-xl:border-0 max-xl:hidden">
            <a href="">Политика&nbsp;конфиденциальности</a>
            <a href="">Договор&nbsp;оферты</a>
          </div>
        </div>
      </ContentContainer>
      {/* <ContentContainer className="hidden border-l border-r border-dimmed-12 max-xl:grid max-xl:grid-cols-3"> */}
      <div className="hidden px-4 pt-6 border-l border-r border-dimmed-12 max-xl:flex">
        <div className="pb-4">
          <h4 className="text-h4 max-sm:text-[16px] text-dimmed-25 leading-[1] mb-8 max-xl:mb-4">
            Для разработчиков
          </h4>
          <nav>
            <ul className="flex flex-col gap-[24px] max-sm:gap-[12px] text-[16px] max-sm:text-[12px] text-white leading-[1] ">
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
      {/* </ContentContainer> */}
      <span className="py-[48px] max-sm:py-[24px] flex justify-center text-[14px] max-sm:text-[12px] text-dimmed-40 leading-[16px] border-t border-dimmed-12">
        &copy; Все права защищены. 2025, Москва
      </span>
    </footer>
  );
};
