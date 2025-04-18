import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
        <div className="absolute inset-0 opacity-30 vra-gradient"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Будущее образования с технологиями 
            <span className="vra-gradient-text"> AR/VR</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Virtual Reality Academy — инновационная школа, где традиционное образование 
            встречается с технологиями виртуальной и дополненной реальности
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
              Начать обучение
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/10 hover:bg-white/20">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-vra-pink opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-vra-blue opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero;