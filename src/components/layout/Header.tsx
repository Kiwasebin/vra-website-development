import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl vra-gradient-text">VRA</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Обучение</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-vra-pink to-vra-blue p-6 no-underline outline-none focus:shadow-md"
                          href="/courses"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Курсы в AR/VR
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Изучайте передовые технологии с профессионалами
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/vr-courses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">VR-курсы</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Погрузитесь в виртуальную реальность
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/ar-courses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">AR-курсы</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Дополненная реальность вокруг нас
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/workshops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Мастер-классы</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Интенсивы с экспертами отрасли
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О нас
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Войти</Button>
          <Button className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background pt-2">
          <div className="container flex flex-col gap-4 p-4">
            <Link to="/" className="py-2 font-medium" onClick={toggleMobileMenu}>
              Главная
            </Link>
            <Link to="/courses" className="py-2 font-medium" onClick={toggleMobileMenu}>
              Курсы
            </Link>
            <Link to="/about" className="py-2 font-medium" onClick={toggleMobileMenu}>
              О нас
            </Link>
            <Link to="/contact" className="py-2 font-medium" onClick={toggleMobileMenu}>
              Контакты
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full" onClick={toggleMobileMenu}>Войти</Button>
              <Button className="w-full bg-gradient-to-r from-vra-pink to-vra-blue text-white" onClick={toggleMobileMenu}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;