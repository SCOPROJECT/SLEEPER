import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#85c1e9]/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2e4053]/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
                Transform Your Sleep,
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Transform Your Life
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Expert sleep coaching, personalized plans, and premium supplements
              to help you achieve the restful sleep you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button className="bg-[#85c1e9] hover:bg-[#5dade2] text-white font-medium px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  Free Consultation
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-[#2e4053] text-[#2e4053] hover:bg-[#2e4053] hover:text-white dark:border-[#85c1e9] dark:text-[#85c1e9] dark:hover:bg-[#85c1e9] dark:hover:text-[#2e4053] font-medium px-8 py-3 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Paid Consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 dark:border-gray-700/20 p-1">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80"
                  alt="Peaceful sleep"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20 dark:border-gray-700/20 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-[#2e4053] dark:text-[#85c1e9] font-semibold mb-2">
                  Sleep Quality Improved
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#85c1e9] to-[#2e4053] w-[85%] rounded-full"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    85%
                  </span>
                </div>
              </motion.div>

              {/* Floating testimonial card */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/20 dark:border-gray-700/20 max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
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
    </section>
  );
}
