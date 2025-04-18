import { 
  Glasses, 
  BookOpen, 
  Users, 
  Lightbulb,
  Code, 
  Award
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
    <div className="mb-4 p-3 rounded-full vra-gradient text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Glasses size={24} />,
      title: "VR Обучение",
      description: "Погружение в виртуальное пространство для максимально эффективного усвоения материала"
    },
    {
      icon: <BookOpen size={24} />,
      title: "AR Учебники",
      description: "Интерактивные учебные материалы с технологией дополненной реальности"
    },
    {
      icon: <Users size={24} />,
      title: "Опытные преподаватели",
      description: "Эксперты с многолетним опытом в сфере AR/VR и образовании"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Инновационные методики",
      description: "Современные подходы к обучению с использованием новейших технологий"
    },
    {
      icon: <Code size={24} />,
      title: "Практические проекты",
      description: "Разработка собственных AR/VR проектов в процессе обучения"
    },
    {
      icon: <Award size={24} />,
      title: "Сертификация",
      description: "Получение официальных документов, подтверждающих квалификацию"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают VRA</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Наш подход сочетает современные технологии и проверенные методики обучения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;