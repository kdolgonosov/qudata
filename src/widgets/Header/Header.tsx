import { Button } from "@/shared/ui";
export const Header = () => {
  return (
    <header className="w-full py-[37px]">
      <div className="max-w-content mx-auto flex justify-between">
        <div className="flex gap-[64px] items-center">
          <a href="#" className="bg-[url(/logo.svg)] w-[145px] h-[39px]"></a>
          <nav>
            <ul className="flex gap-[24px] text-h4 text-text-color leading-[1]">
              <li>
                <a href="">Цены</a>
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
        <div className="flex gap-[32px] items-center">
          <a href="#" className="text-white text-[20px] leading-[20px]">
            Войти
          </a>
          <Button size="md">Регистрация</Button>
        </div>
      </div>
    </header>
  );
};
