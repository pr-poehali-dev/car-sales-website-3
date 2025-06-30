import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="font-heading font-bold text-2xl text-charcoal">
              LUXURY AUTO
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="font-body text-charcoal hover:text-bright-blue transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="font-body text-charcoal hover:text-bright-blue transition-colors"
              >
                Luxury Auto
              </a>
              <a
                href="#"
                className="font-body text-charcoal hover:text-bright-blue transition-colors"
              >
                О компании
              </a>
              <a
                href="#"
                className="font-body text-charcoal hover:text-bright-blue transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button className="bg-bright-blue hover:bg-bright-blue/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
