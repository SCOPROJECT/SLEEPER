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
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [highlightedPlan, setHighlightedPlan] = useState<string | null>(null);

  useEffect(() => {
    const handleHighlightPlan = (event: CustomEvent) => {
      setHighlightedPlan(event.detail.plan);
      setTimeout(() => setHighlightedPlan(null), 3000); // Reset after 3 seconds
    };

    document.addEventListener(
      "highlightPlan",
      handleHighlightPlan as EventListener,
    );
    return () => {
      document.removeEventListener(
        "highlightPlan",
        handleHighlightPlan as EventListener,
      );
    };
  }, []);

  const plans = [
    {
      name: "Free Consultation",
      description: "A brief introduction to our sleep coaching services",
      price: "£0",
      period: "",
      features: [
        "15-minute consultation",
        "General sleep tips",
        "Overview of services",
        "One-time only",
        "No personalized plan",
      ],
      buttonText: "Book Free Session",
      popular: false,
      id: "free",
    },
    {
      name: "Premium Consultation",
      description: "Comprehensive sleep coaching for optimal results",
      price: "£75",
      period: "/session",
      features: [
        "60-minute consultation",
        "Comprehensive sleep analysis",
        "Personalized sleep plan",
        "Ongoing support",
        "Access to premium resources",
        "Custom supplement recommendations",
      ],
      buttonText: "Book Premium Session",
      popular: true,
      id: "premium",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-[#85c1e9]/10 rounded-full filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#2e4053]/10 rounded-full filter blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 font-montserrat"
          >
            <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Choose the perfect plan to start your journey toward better sleep
            and improved well-being.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <div
                className={`relative group h-full transition-all duration-500 ${highlightedPlan === plan.id ? "scale-105 z-10" : highlightedPlan && highlightedPlan !== plan.id ? "opacity-50 scale-95" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#85c1e9]/20 to-[#2e4053]/20 dark:from-[#85c1e9]/10 dark:to-[#2e4053]/10 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card
                  className={`relative h-full overflow-hidden backdrop-blur-md transition-all duration-300 border-0 ${
                    plan.popular
                      ? "bg-white/80 dark:bg-gray-800/80 shadow-xl"
                      : "bg-white/60 dark:bg-gray-800/60 hover:shadow-lg"
                  }`}
                >
                  <CardHeader className="pb-4 relative z-10">
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
                  <CardContent className="pb-4 relative z-10">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.4 }}
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#85c1e9] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
