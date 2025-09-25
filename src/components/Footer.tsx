import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  const quickLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.courses'), href: "#courses" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  const services = [
    "تطوير الذكاء الاصطناعي",
    "أتمتة العمليات",
    "تحليل البيانات",
    "الاستشارات التقنية",
    "التدريب والتطوير"
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary to-muted border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* شعار الشركة */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-gradient">
              Watcher IA واتشر
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button size="sm" variant="outline" className="p-2 border-primary/50 hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 border-primary/50 hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 border-primary/50 hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* خدماتنا */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-foreground/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-foreground/70">info@horizonia.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-foreground/70">+216 21 304 255</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-foreground/70">نهج 13 أوت منفلوري - تونس</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © 2024 Watcher IA واتشر. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;