import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                Премиальные
                <br />
                <span className="text-bright-blue">автомобили</span>
                <br />
                для вас
              </h1>
              <p className="font-body text-xl text-gray-300 max-w-lg">
                Эксклюзивная коллекция новых и сертифицированных автомобилей
                премиум-класса с полным сервисным обслуживанием
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-bright-blue hover:bg-bright-blue/90 text-white px-8 py-3"
              >
                <Icon name="Car" size={20} className="mr-2" />
                Каталог автомобилей
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-3"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-bright-blue">
                  500+
                </div>
                <div className="font-body text-sm text-gray-400">
                  Автомобилей в наличии
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-bright-blue">
                  15
                </div>
                <div className="font-body text-sm text-gray-400">
                  Лет на рынке
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-bright-blue">
                  24/7
                </div>
                <div className="font-body text-sm text-gray-400">
                  Поддержка клиентов
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-silver/20 to-bright-blue/20 rounded-2xl flex items-center justify-center">
              <Icon name="Car" size={120} className="text-bright-blue/50" />
            </div>
            <div className="absolute -top-4 -right-4 bg-bright-blue text-white px-4 py-2 rounded-full font-body text-sm font-semibold">
              Новинки 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
