import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useRef } from "react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Marketing Director",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content:
        "After struggling with insomnia for years, Sleep Coach Online transformed my sleep habits. Their personalized approach and supplements have given me consistent, restful sleep for the first time in a decade.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content:
        "The Premium plan was exactly what I needed. The bi-weekly coaching calls helped me adjust my habits, and the sleep environment assessment revealed issues I never would have identified on my own.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Healthcare Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "As someone who works night shifts, getting quality sleep was always challenging. The custom plan and supplements from Sleep Coach Online have made a remarkable difference in my daytime rest quality.",
      rating: 4,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]),
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#85c1e9]/10 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [100, -100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]),
          }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#2e4053]/10 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from people who have transformed their sleep and their lives
            with our coaching and products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#85c1e9]/30 to-[#2e4053]/30 dark:from-[#85c1e9]/20 dark:to-[#2e4053]/20 rounded-lg blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative h-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
