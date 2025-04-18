import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, Star, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  featured?: boolean;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  rating,
  featured = false
}: CourseCardProps) => (
  <Card className={`overflow-hidden transition-all hover:shadow-lg ${featured ? 'border-vra-pink' : ''}`}>
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform hover:scale-105"
      />
      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-vra-pink to-vra-blue">
        {category}
      </Badge>
      {featured && (
        <Badge className="absolute top-3 right-3 bg-yellow-500">
          Популярный
        </Badge>
      )}
    </div>
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <Badge variant="outline">{level}</Badge>
      </div>
      <CardDescription className="line-clamp-2">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center">
          <Clock className="mr-1 h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <Users className="mr-1 h-4 w-4" />
          <span>{students} студентов</span>
        </div>
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="pt-0">
      <Button asChild className="w-full bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
        <Link to={`/courses/${id}`}>Подробнее</Link>
      </Button>
    </CardFooter>
  </Card>
);

const Courses = () => {
  const allCourses = [
    {
      id: "vr-basics",
      title: "Основы разработки VR-приложений",
      description: "Изучите базовые принципы создания виртуальных миров с нуля",
      image: "/placeholder.svg",
      category: "VR",
      level: "Начинающий",
      duration: "8 недель",
      students: 324,
      rating: 4.8,
      featured: true
    },
    {
      id: "ar-business",
      title: "AR-технологии для бизнеса",
      description: "Применение дополненной реальности в маркетинге и презентациях",
      image: "/placeholder.svg",
      category: "AR",
      level: "Средний",
      duration: "6 недель",
      students: 256,
      rating: 4.7,
      featured: true
    },
    {
      id: "vr-education",
      title: "Создание образовательных VR-симуляций",
      description: "Разработка интерактивных обучающих сценариев в виртуальной реальности",
      image: "/placeholder.svg",
      category: "VR",
      level: "Продвинутый",
      duration: "10 недель",
      students: 189,
      rating: 4.9
    },
    {
      id: "ar-games",
      title: "Разработка AR-игр",
      description: "Создание увлекательных игр с элементами дополненной реальности",
      image: "/placeholder.svg",
      category: "AR",
      level: "Средний",
      duration: "12 недель",
      students: 218,
      rating: 4.6
    },
    {
      id: "vr-modeling",
      title: "3D-моделирование для VR",
      description: "Создание оптимизированных 3D-моделей для виртуальной реальности",
      image: "/placeholder.svg",
      category: "VR",
      level: "Начинающий",
      duration: "8 недель",
      students: 275,
      rating: 4.7
    },
    {
      id: "mixed-reality",
      title: "Введение в смешанную реальность",
      description: "Изучение принципов и технологий смешанной реальности",
      image: "/placeholder.svg",
      category: "MR",
      level: "Средний",
      duration: "6 недель",
      students: 142,
      rating: 4.5
    },
    {
      id: "vr-ui-design",
      title: "Дизайн пользовательских интерфейсов для VR",
      description: "Создание интуитивно понятных и эффективных UI для VR-приложений",
      image: "/placeholder.svg",
      category: "VR",
      level: "Продвинутый",
      duration: "8 недель",
      students: 167,
      rating: 4.8
    },
    {
      id: "ar-mobile",
      title: "Разработка мобильных AR-приложений",
      description: "Создание AR-приложений для iOS и Android с использованием ARKit и ARCore",
      image: "/placeholder.svg",
      category: "AR",
      level: "Средний",
      duration: "10 недель",
      students: 201,
      rating: 4.7
    },
    {
      id: "vr-interaction",
      title: "Проектирование взаимодействий в VR",
      description: "Разработка естественных и интуитивных способов взаимодействия в виртуальной реальности",
      image: "/placeholder.svg",
      category: "VR",
      level: "Продвинутый",
      duration: "8 недель",
      students: 154,
      rating: 4.9
    }
  ];

  const vrCourses = allCourses.filter(course => course.category === "VR");
  const arCourses = allCourses.filter(course => course.category === "AR");
  const mrCourses = allCourses.filter(course => course.category === "MR");

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
              Наши курсы
            </h1>
            <p className="text-xl text-gray-300">
              Выберите программу обучения, которая поможет вам освоить AR/VR технологии 
              и начать карьеру в этой перспективной области
            </p>
          </div>
        </div>
        
        <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container">
          {/* Search and Filters */}
          <div className="mb-8 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск курсов..."
                    className="pl-8"
                  />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Уровень" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Начинающий</SelectItem>
                    <SelectItem value="intermediate">Средний</SelectItem>
                    <SelectItem value="advanced">Продвинутый</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="newest">Сначала новые</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="vr">VR</TabsTrigger>
              <TabsTrigger value="ar">AR</TabsTrigger>
              <TabsTrigger value="mr">MR</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="vr" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vrCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ar" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mr" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mrCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
              Не можете выбрать подходящий курс?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Запишитесь на бесплатную консультацию, и наши специалисты помогут определить 
              оптимальную программу обучения исходя из ваших целей и уровня подготовки
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;