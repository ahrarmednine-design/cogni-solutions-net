import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Settings, Brain, BarChart3, ArrowLeft } from "lucide-react";
import servicesIcon from "@/assets/services-icon.jpg";
import trainingIcon from "@/assets/training-icon.jpg";
import consultingIcon from "@/assets/consulting-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "خدمات الذكاء الاصطناعي",
      description: "حلول ذكية متطورة لتحسين الإنتاجية وتطوير الأعمال باستخدام أحدث تقنيات الذكاء الاصطناعي",
      image: servicesIcon,
      features: ["تطوير نماذج AI مخصصة", "معالجة اللغات الطبيعية", "رؤية حاسوبية", "تحليل البيانات الذكي"]
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "الدورات التكوينية",
      description: "برامج تدريبية متخصصة في الأتمتة الذكية وتطوير المهارات التقنية للفرق والمؤسسات",
      image: trainingIcon,
      features: ["ورش عمل تفاعلية", "تدريب على التقنيات الحديثة", "شهادات معتمدة", "متابعة مستمرة"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "الاستشارات التقنية",
      description: "خدمات استشارية متخصصة لتحليل احتياجات شركتك ووضع استراتيجيات التحول الرقمي",
      image: consultingIcon,
      features: ["تقييم العمليات الحالية", "تصميم استراتيجيات AI", "تحليل الجدوى", "خطط التنفيذ"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            خدماتنا <span className="text-gradient">المتخصصة</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتطورة في مجال الذكاء الاصطناعي والأتمتة لدعم نمو أعمالكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader className="space-y-4">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 p-3 glass-card rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/60">
                      <Settings className="h-4 w-4 text-accent ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 group-hover:gradient-primary group-hover:text-primary-foreground">
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;