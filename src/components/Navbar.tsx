import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import horizonLogo from "@/assets/horizon-ia-logo.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import { updateDocumentLanguage } from "@/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Update document direction when language changes
  useEffect(() => {
    updateDocumentLanguage(i18n.language);
  }, [i18n.language]);

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.courses'), href: "#courses" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 space-x-reverse">
            <img 
              src={horizonLogo} 
              alt="Horizon IA أفق" 
              className="h-10 w-auto"
            />
            <div className="text-xl font-bold text-gradient">
              Horizon IA أفق
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <LanguageSwitcher />
            <Button variant="default" className="gradient-primary text-primary-foreground">
              {t('nav.bookConsultation')}
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden glass-card border-t border-glass-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-3">
              <LanguageSwitcher />
              <Button variant="default" className="gradient-primary text-primary-foreground w-full">
                {t('nav.bookConsultation')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;