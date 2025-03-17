import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#85c1e9]/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2e4053]/20 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat"
            >
              <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
                Transform Your Sleep,
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Transform Your Life
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Expert sleep coaching, personalized plans, and premium supplements
              to help you achieve the restful sleep you deserve.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#products">
                <Button
                  className="bg-[#85c1e9] hover:bg-[#5dade2] text-white font-medium px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  as={motion.button}
                  onClick={() => {
                    const productsSection = document.getElementById("products");
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Products
                </Button>
              </a>
              <a href="#pricing">
                <Button
                  variant="outline"
                  className="border-[#2e4053] text-[#2e4053] hover:bg-[#2e4053] hover:text-white dark:border-[#85c1e9] dark:text-[#85c1e9] dark:hover:bg-[#85c1e9] dark:hover:text-[#2e4053] font-medium px-8 py-3 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  as={motion.button}
                  onClick={() => {
                    const pricingSection = document.getElementById("pricing");
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Pricing
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 dark:border-gray-700/20 p-1"
              >
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                  <span className="text-8xl">😴</span>
                </div>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20 dark:border-gray-700/20 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3 className="text-[#2e4053] dark:text-[#85c1e9] font-semibold mb-2">
                  Sleep Quality Improved
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      animate={{
                        width: ["0%", "100%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        times: [0, 0.3, 0.7, 1],
                      }}
                      className="h-full bg-gradient-to-r from-[#85c1e9] to-[#2e4053] rounded-full"
                    ></motion.div>
                  </div>
                  <motion.span
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="text-gray-700 dark:text-gray-300 font-medium w-10"
                  >
                    <motion.span
                      animate={{
                        count: [0, 100, 100, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        times: [0, 0.3, 0.7, 1],
                      }}
                    >
                      {(progress) => `${Math.round(progress.count)}%`}
                    </motion.span>
                  </motion.span>
                </div>
              </motion.div>

              {/* Floating testimonial card */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20 dark:border-gray-700/20 max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                  "My sleep has never been better. Life changing!"
                </p>
                <p className="text-[#2e4053] dark:text-[#85c1e9] font-semibold text-sm mt-2">
                  — Sarah J.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{
              height: ["20%", "40%", "20%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 bg-gray-400 dark:bg-gray-500 rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
