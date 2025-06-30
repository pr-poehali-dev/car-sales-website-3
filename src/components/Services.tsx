import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Zap",
    title: "Новые автомобили",
    description:
      "Последние модели премиальных брендов с официальной гарантией и полным пакетом документов",
    color: "text-bright-blue",
  },
  {
    icon: "Shield",
    title: "Сертифицированные б/у",
    description:
      "Тщательно проверенные автомобили с пробегом, прошедшие многоступенчатую диагностику",
    color: "text-green-500",
  },
  {
    icon: "RefreshCw",
    title: "Trade-in программа",
    description:
      "Выгодный обмен вашего автомобиля на новый с доплатой по справедливой рыночной цене",
    color: "text-orange-500",
  },
  {
    icon: "CreditCard",
    title: "Кредит и лизинг",
    description:
      "Индивидуальные программы финансирования с минимальной ставкой и гибкими условиями",
    color: "text-purple-500",
  },
  {
    icon: "Wrench",
    title: "Сервисное обслуживание",
    description:
      "Полный спектр услуг по обслуживанию и ремонту в авторизованном сервисном центре",
    color: "text-red-500",
  },
  {
    icon: "Package",
    title: "Оригинальные запчасти",
    description:
      "Большой склад оригинальных запчастей и аксессуаров для всех представленных марок",
    color: "text-blue-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Наши услуги
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг для покупки, обслуживания и владения премиальным
            автомобилем
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-full bg-gray-100 ${service.color}`}
                  >
                    <Icon name={service.icon as any} size={24} />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
