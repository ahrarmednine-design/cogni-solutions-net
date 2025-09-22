import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, GraduationCap, Building, Baby, Clock, Users } from "lucide-react";

const Training = () => {
  const { t } = useTranslation();
  
  const programs = t('training.programs', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    duration: string;
  }>;

  const programIcons = [GraduationCap, Building, Baby];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('training.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('training.subtitle')}
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-16">
          <Card className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 glass-card rounded-full">
                  <Youtube className="h-12 w-12 text-red-500" />
                </div>
              </div>
              <CardTitle className="text-2xl text-gradient">
                {t('training.youtube.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-foreground/70 leading-relaxed text-lg">
                {t('training.youtube.description')}
              </CardDescription>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Youtube className="mr-2 h-5 w-5" />
                {t('training.youtube.subscribe')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = programIcons[index];
            return (
              <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 glass-card rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {program.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-foreground/60 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Group & Individual Sessions
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 group-hover:gradient-primary group-hover:text-primary-foreground">
                    {t('training.enroll')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Training;