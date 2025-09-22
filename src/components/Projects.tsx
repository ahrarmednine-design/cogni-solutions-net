import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, ShoppingCart, Bot } from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();
  
  const projectIcons = [TrendingUp, ShoppingCart, Bot];
  
  const projects = t('projects.portfolio', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    category: string;
  }>;

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index];
            return (
              <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 glass-card rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 group-hover:gradient-primary group-hover:text-primary-foreground">
                    {t('projects.viewProject')}
                    <ExternalLink className="mr-2 h-4 w-4" />
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

export default Projects;