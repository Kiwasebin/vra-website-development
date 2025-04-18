import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen,
  Users,
  Target,
  Award,
  Check
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
          <div className="absolute inset-0 opacity-30 vra-gradient"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              О Virtual Reality Academy
            </h1>
            <p className="text-xl text-gray-300">
              Мы меняем подход к образованию с помощью технологий виртуальной и дополненной реальности
            </p>
          </div>
        </div>
        
        <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-6">
                VRA была основана в 2018 году группой энтузиастов, объединенных общей идеей — 
                сделать образование более эффективным, увлекательным и доступным с помощью 
                современных технологий.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим, что виртуальная и дополненная реальность — это не просто технологии будущего, 
                а мощные инструменты, которые уже сегодня могут трансформировать процесс обучения, 
                делая его более наглядным, интерактивным и результативным.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
                  Наши курсы
                </Button>
                <Button variant="outline">
                  Команда
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="VRA Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-background">
                <img 
                  src="/placeholder.svg" 
                  alt="VRA Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Наши ценности</h2>
            <p className="text-lg text-muted-foreground">
              В основе нашего подхода лежат принципы, которые определяют все аспекты работы VRA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full vra-gradient text-white">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Инновации</h3>
                </div>
                <p className="text-muted-foreground">
                  Мы постоянно исследуем новые технологии и методики, чтобы предлагать нашим студентам 
                  самые современные и эффективные решения для обучения.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full vra-gradient text-white">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Доступность</h3>
                </div>
                <p className="text-muted-foreground">
                  Мы стремимся сделать передовые образовательные технологии доступными для всех, 
                  независимо от возраста, уровня подготовки или местоположения.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full vra-gradient text-white">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Результативность</h3>
                </div>
                <p className="text-muted-foreground">
                  Наша главная цель — помочь каждому студенту достичь максимальных результатов 
                  в обучении и применить полученные знания на практике.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="VRA Achievements" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-vra-pink" />
                  <span className="font-semibold">5+ лет опыта</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Мы развиваем AR/VR образование с 2018 года
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Наши достижения</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Более 5000 выпускников</h3>
                    <p className="text-muted-foreground">
                      Наши курсы успешно окончили тысячи студентов, которые теперь работают 
                      в ведущих технологических компаниях
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">30+ образовательных программ</h3>
                    <p className="text-muted-foreground">
                      Мы разработали десятки курсов по различным аспектам AR/VR технологий, 
                      от базовых до продвинутых
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">12 патентов на образовательные методики</h3>
                    <p className="text-muted-foreground">
                      Мы активно разрабатываем и патентуем инновационные подходы к обучению 
                      с использованием технологий виртуальной и дополненной реальности
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950 opacity-90"></div>
          <div className="absolute inset-0 opacity-30 vra-gradient"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Присоединяйтесь к нам
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Станьте частью сообщества инноваторов, которые меняют будущее образования 
              с помощью AR/VR технологий
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
              Начать обучение
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;