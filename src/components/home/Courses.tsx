import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  link: string;
}

const CourseCard = ({
  title,
  description,
  image,
  category,
  duration,
  students,
  rating,
  link
}: CourseCardProps) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform hover:scale-105"
      />
      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-vra-pink to-vra-blue">
        {category}
      </Badge>
    </div>
    <CardHeader>
      <CardTitle className="line-clamp-1">{title}</CardTitle>
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
        <Link to={link}>Подробнее</Link>
      </Button>
    </CardFooter>
  </Card>
);

const Courses = () => {
  const courses = [
    {
      title: "Основы разработки VR-приложений",
      description: "Изучите базовые принципы создания виртуальных миров с нуля",
      image: "/placeholder.svg",
      category: "VR",
      duration: "8 недель",
      students: 324,
      rating: 4.8,
      link: "/courses/vr-basics"
    },
    {
      title: "AR-технологии для бизнеса",
      description: "Применение дополненной реальности в маркетинге и презентациях",
      image: "/placeholder.svg",
      category: "AR",
      duration: "6 недель",
      students: 256,
      rating: 4.7,
      link: "/courses/ar-business"
    },
    {
      title: "Создание образовательных VR-симуляций",
      description: "Разработка интерактивных обучающих сценариев в виртуальной реальности",
      image: "/placeholder.svg",
      category: "VR",
      duration: "10 недель",
      students: 189,
      rating: 4.9,
      link: "/courses/vr-education"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Выберите программу обучения, которая подходит именно вам
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/courses">Все курсы</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;