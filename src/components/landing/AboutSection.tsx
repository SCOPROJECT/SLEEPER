import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-[#85c1e9]" />,
      title: "Personalized Sleep Plans",
      description:
        "Custom sleep strategies tailored to your unique needs and lifestyle.",
    },
    {
      icon: <Award className="h-6 w-6 text-[#85c1e9]" />,
      title: "Certified Sleep Experts",
      description:
        "Our team consists of certified sleep specialists with years of experience.",
    },
    {
      icon: <Clock className="h-6 w-6 text-[#85c1e9]" />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our round-the-clock support team.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#85c1e9]" />,
      title: "Community Access",
      description:
        "Join our community of sleep enthusiasts for tips, advice, and encouragement.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#85c1e9]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#2e4053]/10 rounded-full filter blur-3xl" />

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
              About Us
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sleep Coach Online was founded with a simple mission: to help people
            achieve better sleep and improve their quality of life through
            expert guidance and premium sleep solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 dark:border-gray-700/20 p-1">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
                  alt="Sleep expert team"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-6 -right-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20 dark:border-gray-700/20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#85c1e9] rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <h3 className="text-[#2e4053] dark:text-[#85c1e9] font-semibold">
                      Years Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      In sleep science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white font-montserrat">
              Our Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team of certified sleep specialists combines scientific
              knowledge with practical solutions to address a wide range of
              sleep issues. From insomnia to sleep apnea, we've helped thousands
              of clients achieve better sleep and improved well-being.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
