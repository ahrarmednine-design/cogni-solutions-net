import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  
  const achievements = t('about.achievements', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const values = t('about.values.list', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('about.title')}
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">{t('about.vision.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent">{t('about.mission.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => {
                const icons = [
                  <Users className="h-8 w-8 text-primary" />,
                  <Award className="h-8 w-8 text-accent" />,
                  <Target className="h-8 w-8 text-primary" />
                ];
                return (
                  <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <CardContent className="p-6 flex items-center space-x-4 space-x-reverse">
                      <div className="p-3 glass-card rounded-full">
                        {icons[index]}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <p className="text-sm text-foreground/60">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card border-glass-border">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-xl text-primary">{t('about.values.title')}</h4>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-foreground/70">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;