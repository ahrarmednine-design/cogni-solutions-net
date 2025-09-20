import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t('contact.email'),
      details: "info@horizonia.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: t('contact.phone'),
      details: "+216 21 304 255"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t('contact.address'),
      details: "نهج 13 أوت منفلوري - تونس"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">معلومات التواصل</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card border-glass-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 glass-card rounded-full">
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-foreground/60">{info.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-glass-border">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-xl text-primary">لماذا تختارنا؟</h4>
                <ul className="space-y-3 text-foreground/70">
                  <li>• خبرة واسعة في مجال الذكاء الاصطناعي</li>
                  <li>• حلول مخصصة تناسب احتياجاتك</li>
                  <li>• دعم فني متواصل</li>
                  <li>• أسعار تنافسية وجودة عالية</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-glass-border animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.form.name')}</label>
                  <Input placeholder={t('contact.form.placeholders.name')} className="glass-card border-glass-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.form.email')}</label>
                  <Input type="email" placeholder={t('contact.form.placeholders.email')} className="glass-card border-glass-border" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.form.phone')}</label>
                <Input placeholder={t('contact.form.placeholders.phone')} className="glass-card border-glass-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.form.subject')}</label>
                <Input placeholder={t('contact.form.placeholders.subject')} className="glass-card border-glass-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.form.message')}</label>
                <Textarea 
                  placeholder={t('contact.form.placeholders.message')}
                  className="glass-card border-glass-border min-h-[120px]"
                />
              </div>
              
              <Button className="w-full gradient-primary text-primary-foreground shadow-glow">
                {t('contact.form.send')}
                <Send className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;