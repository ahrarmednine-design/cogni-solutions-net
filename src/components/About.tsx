import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "فريق متخصص",
      description: "خبراء في الذكاء الاصطناعي وعلوم البيانات"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "جودة عالية",
      description: "حلول مبتكرة تحقق أفضل النتائج"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "التزام بالمواعيد",
      description: "تسليم المشاريع في الوقت المحدد"
    }
  ];

  const values = [
    "الابتكار في تطوير الحلول التقنية",
    "التميز في خدمة العملاء",
    "الشفافية في التعامل",
    "الجودة في التنفيذ",
    "التطوير المستمر للمهارات",
    "الأمان في حماية البيانات"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                من <span className="text-gradient">نحن</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                نحن شركة متخصصة في تطوير حلول الذكاء الاصطناعي المبتكرة، نساعد الشركات على تحقيق التحول الرقمي وتحسين كفاءة العمليات
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">رؤيتنا</h3>
              <p className="text-foreground/70 leading-relaxed">
                أن نكون الشريك الأول للشركات في رحلة التحول الرقمي، ونساهم في بناء مستقبل أكثر ذكاءً وكفاءة من خلال تطبيق أحدث تقنيات الذكاء الاصطناعي
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent">مهمتنا</h3>
              <p className="text-foreground/70 leading-relaxed">
                تمكين الشركات من الاستفادة القصوى من تقنيات الذكاء الاصطناعي لتحسين الإنتاجية، تقليل التكاليف، وزيادة القدرة التنافسية في السوق
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 glass-card rounded-full">
                      {achievement.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg">{achievement.title}</h4>
                      <p className="text-sm text-foreground/60">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-glass-border">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-xl text-primary">قيمنا الأساسية</h4>
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