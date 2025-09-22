import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/ai-hero.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('hero.title')}
                <span className="text-gradient block">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow">
                {t('hero.discoverServices')}
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                {t('hero.learnServices')}
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">200+</div>
                <div className="text-sm text-foreground/60">{t('hero.stats.clients')}</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/60">{t('hero.stats.successRate')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative">
              <img
                src={heroImage}
                alt={t('hero.subtitle')}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
            
            <div className="absolute -top-4 -right-4 glass-card p-4 animate-pulse-slow">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 animate-pulse-slow delay-1000">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            
            <div className="absolute top-1/2 -left-8 glass-card p-4 animate-pulse-slow delay-2000">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;