import { BurgerMenu } from "@/shared/icons";
import { Button } from "@/shared/ui";
export const Header = () => {
  return (
    <header className="w-full py-[2.3125rem] max-2xl:px-4 max-2xl:py-6 max-md:bg-[#0d0f16]">
      <a
        href="#"
        className="hidden max-lg:block absolute top-8 max-md:top-6.75 left-[calc(50%_-_20.5px)] bg-[url(/logo-small.svg)] bg-contain bg-no-repeat w-[41px] h-[34px] max-md:w-[29px] max-md:h-[24px]"
      ></a>
      <div className="max-w-content mx-auto flex justify-between items-center">
        <button className="hidden bg-contain w-[30px] h-[30px] max-lg:block max-sm:w-[20px] max-sm:h-[20px]">
          <BurgerMenu
            width={30}
            height={30}
            className="max-sm:w-[20px] max-sm:h-[20px]"
            color="#fff"
          />
        </button>

        <div className="flex items-center gap-[64px] max-2xl:gap-[32px] max-lg:hidden">
          <a
            href="#"
            className="bg-[url(/logo.svg)] w-[145px]  h-[39px] max-lg:bg-[url(/logo-small.svg)] max-lg:w-[41px] max-lg:h-[34px] max-lg:bg-contain max-lg:bg-no-repeat"
          ></a>
          <nav>
            <ul className="flex gap-[24px]  text-h4 text-text-color leading-[1] max-2xl:text-[18px] max-lg:hidden">
              <li>
                <a href="" className="">
                  Цены
                </a>
              </li>
              <li>
                <a href="">О нас</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Блог</a>
              </li>
              <li>
                <a href="">Сравнение</a>
              </li>
              <li>
                <a href="">Документация</a>
              </li>
            </ul>
          </nav>
        </div>
        <Button size="md" className="hidden max-lg:block">
          Войти
        </Button>
        <div className="flex gap-[32px] items-center max-lg:hidden">
          <a
            href="#"
            className="text-white text-[20px] leading-[20px] max-2xl:text-[18px] "
          >
            Вход
          </a>
          <Button size="md" withArrow>
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};
