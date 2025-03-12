import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners looking to improve their sleep",
      price: "$19",
      period: "/month",
      features: [
        "Personalized sleep assessment",
        "Basic sleep plan",
        "Weekly check-ins",
        "Email support",
        "Sleep tracking tools",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      description: "Comprehensive support for serious sleep improvement",
      price: "$49",
      period: "/month",
      features: [
        "Everything in Basic",
        "Advanced sleep analysis",
        "Bi-weekly coaching calls",
        "Priority email & chat support",
        "Custom supplement recommendations",
        "Sleep environment assessment",
      ],
      buttonText: "Get Premium",
      popular: true,
    },
    {
      name: "Ultimate",
      description: "The complete sleep transformation package",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Premium",
        "Weekly 1-on-1 coaching",
        "24/7 priority support",
        "Personalized supplement plan",
        "Sleep technology consultation",
        "Lifetime access to resources",
        "Quarterly progress reviews",
      ],
      buttonText: "Get Ultimate",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#85c1e9]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#2e4053]/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to start your journey toward better sleep
            and improved well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`h-full overflow-hidden backdrop-blur-md transition-all duration-300 ${
                  plan.popular
                    ? "border-[#85c1e9] dark:border-[#85c1e9] bg-white/80 dark:bg-gray-800/80 shadow-xl"
                    : "border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:shadow-lg"
                }`}
              >
                <CardHeader className="pb-4">
                  {plan.popular && (
                    <div className="py-1 px-3 bg-[#85c1e9] text-white text-xs font-semibold rounded-full w-fit mx-auto mb-2">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-xl font-bold text-center text-gray-800 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </CardDescription>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold text-[#2e4053] dark:text-[#85c1e9]">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#85c1e9] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#85c1e9] hover:bg-[#5dade2] text-white"
                        : "bg-[#2e4053] hover:bg-[#1c2833] text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
