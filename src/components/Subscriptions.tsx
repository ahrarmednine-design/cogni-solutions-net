import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, CreditCard, Smartphone, Banknote } from "lucide-react";

const Subscriptions = () => {
  const { t } = useTranslation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = t('subscriptions.plans', { returnObjects: true }) as Array<{
    name: string;
    price: string;
    period: string;
    popular?: boolean;
    features: string[];
  }>;

  const paymentMethods = t('subscriptions.paymentMethods.methods', { returnObjects: true }) as string[];
  const paymentIcons = [CreditCard, Smartphone, Banknote];

  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('subscriptions.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t('subscriptions.subtitle')}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1 rounded-full">
            <div className="flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'gradient-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {t('subscriptions.monthly')}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                  billingPeriod === 'yearly'
                    ? 'gradient-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {t('subscriptions.yearly')}
                <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs">
                  {t('subscriptions.saveText')}
                </Badge>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`glass-card border-glass-border hover:shadow-glow transition-all duration-300 group animate-slide-up relative ${
                plan.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">
                    {plan.price} TND
                    <span className="text-lg font-normal text-foreground/60">
                      /{billingPeriod === 'yearly' ? 'year' : t('subscriptions.monthly').toLowerCase()}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="text-sm text-accent">
                      Save 240 TND per year
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-primary text-primary-foreground shadow-glow' 
                      : 'border-primary/50 text-primary hover:bg-primary/10'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {t('subscriptions.choosePlan')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">{t('subscriptions.paymentMethods.title')}</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {paymentMethods.map((method, index) => {
              const IconComponent = paymentIcons[index];
              return (
                <div key={index} className="flex items-center space-x-3 glass-card p-4 rounded-lg">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">{method}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;