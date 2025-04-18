import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ text, name, role, avatar, rating }: TestimonialProps) => (
  <Card className="border-none shadow-none bg-transparent">
    <CardContent className="p-6">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic">{text}</p>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      text: "VRA полностью изменила моё представление о том, как можно учиться. Погружение в виртуальную реальность делает процесс обучения не только эффективным, но и невероятно увлекательным.",
      name: "Екатерина Смирнова",
      role: "Выпускница курса VR-дизайна",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      text: "Благодаря курсам в VRA я смог с нуля освоить разработку AR-приложений и уже через 2 месяца после окончания обучения нашёл работу в крупной технологической компании.",
      name: "Алексей Петров",
      role: "AR-разработчик",
      avatar: "/placeholder.svg",
      rating: 5
    },
    {
      text: "Преподаватели VRA — настоящие профессионалы своего дела, которые делятся не только теоретическими знаниями, но и практическим опытом. Это бесценно для новичков в индустрии.",
      name: "Михаил Иванов",
      role: "3D-моделлер",
      avatar: "/placeholder.svg",
      rating: 4
    },
    {
      text: "Никогда не думала, что обучение может быть таким захватывающим! VRA предлагает уникальный формат, который помогает лучше усваивать материал и применять его на практике.",
      name: "Анна Козлова",
      role: "Студентка",
      avatar: "/placeholder.svg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-vra-pink opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-vra-blue opacity-10 blur-3xl"></div>
      
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших студентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о VRA те, кто уже прошел обучение
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;