import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 opacity-90"></div>
        <div className="absolute inset-0 opacity-30 vra-gradient"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Готовы отправиться в будущее образования?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Запишитесь на бесплатную консультацию и узнайте, как технологии AR/VR 
            могут изменить ваш подход к обучению
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
            Записаться сейчас
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-vra-blue opacity-20 blur-3xl"></div>
    </section>
  );
};

export default CTA;