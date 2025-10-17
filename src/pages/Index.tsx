import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const researchData = [
    { month: 'Янв', value: 45 },
    { month: 'Фев', value: 52 },
    { month: 'Мар', value: 61 },
    { month: 'Апр', value: 58 },
    { month: 'Май', value: 73 },
    { month: 'Июн', value: 82 },
  ];

  const maxValue = Math.max(...researchData.map(d => d.value));

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Microscope" size={24} className="text-primary" />
              <span className="text-xl font-bold">BioBasis</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('articles')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'articles' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Статьи
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'research' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Исследования
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Портал биологических исследований
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Научная платформа для изучения живых систем, от молекулярного уровня до экосистем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Dna" size={40} className="text-primary mb-3" />
                <CardTitle>Молекулярная биология</CardTitle>
                <CardDescription>
                  Исследования структуры и функций биомолекул
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Leaf" size={40} className="text-primary mb-3" />
                <CardTitle>Экология</CardTitle>
                <CardDescription>
                  Взаимодействие организмов с окружающей средой
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="FlaskConical" size={40} className="text-primary mb-3" />
                <CardTitle>Биохимия</CardTitle>
                <CardDescription>
                  Химические процессы в живых организмах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Последние статьи</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Механизмы фотосинтеза в хлоропластах</CardTitle>
                <CardDescription>15 октября 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Новое исследование раскрывает детальные механизмы преобразования световой энергии в химическую энергию АТФ в тилакоидных мембранах.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Ботаника</span>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Биохимия</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>CRISPR-Cas9 в генной терапии</CardTitle>
                <CardDescription>12 октября 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Прорывы в применении технологии редактирования генома для лечения наследственных заболеваний и их клиническое значение.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Генетика</span>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Медицина</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Микробиом и иммунная система</CardTitle>
                <CardDescription>8 октября 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Анализ взаимодействия кишечной микрофлоры с клетками иммунной системы и влияние на общее здоровье организма.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Микробиология</span>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Иммунология</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Биоразнообразие тропических лесов</CardTitle>
                <CardDescription>5 октября 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Комплексное исследование видового состава и экологических ниш в экосистемах амазонских дождевых лесов.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Экология</span>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">Зоология</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Активность исследований</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Количество публикаций (2025)</CardTitle>
              <CardDescription>Статистика научных работ по месяцам</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-4 px-4">
                {researchData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-primary/20 rounded-t-lg relative group cursor-pointer hover:bg-primary/30 transition-colors"
                         style={{ height: `${(data.value / maxValue) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {data.value}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">127</CardTitle>
                <CardDescription>Активных исследований</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">45</CardTitle>
                <CardDescription>Научных сотрудников</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">18</CardTitle>
                <CardDescription>Партнёрских организаций</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Напишите нам для сотрудничества или вопросов</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Тема</label>
                  <Input placeholder="Тема сообщения" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Icon name="Mail" size={24} className="text-primary" />
              <span className="text-sm text-muted-foreground">info@biobasis.ru</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Phone" size={24} className="text-primary" />
              <span className="text-sm text-muted-foreground">+7 (495) 123-45-67</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="text-sm text-muted-foreground">Москва, Россия</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 BioBasis. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
