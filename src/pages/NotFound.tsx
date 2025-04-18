import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-20">
        <div className="vra-gradient text-white text-8xl font-bold rounded-full w-40 h-40 flex items-center justify-center mb-8">
          404
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Страница не найдена</h1>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-md">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-vra-pink to-vra-blue text-white hover:opacity-90">
            <Link to="/">Вернуться на главную</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/courses">Наши курсы</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;