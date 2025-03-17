import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#85c1e9]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2e4053]/10 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={footerVariants}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent font-montserrat">
                Sleep Coach Online
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transforming lives through better sleep, one night at a time.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                aria-label="Facebook"
                whileHover={{ y: -3, color: "#85c1e9" }}
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Twitter"
                whileHover={{ y: -3, color: "#85c1e9" }}
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ y: -3, color: "#85c1e9" }}
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ y: -3, color: "#85c1e9" }}
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>

            {/* Mobile App Download */}
            <div className="mt-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Download Our App
              </p>
              <div className="flex space-x-3">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                    alt="Download on App Store"
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#about"
                  whileHover={{ x: 3, color: "#85c1e9" }}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#products"
                  whileHover={{ x: 3, color: "#85c1e9" }}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Products
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#pricing"
                  whileHover={{ x: 3, color: "#85c1e9" }}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Pricing
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 3, color: "#85c1e9" }}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 3, color: "#85c1e9" }}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  FAQ
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#85c1e9] mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Sleep Street, Dreamland, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#85c1e9] mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#85c1e9] mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  info@sleepcoach.com
                </span>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                We Accept
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                  alt="Visa"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                  alt="MasterCard"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt="PayPal"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
                  alt="Apple Pay"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
              Subscribe
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get sleep tips and updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
              />
              <Button
                className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.button}
              >
                Subscribe
              </Button>
            </div>

            {/* Crypto Payments */}
            <div className="mt-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                We Accept Crypto
              </p>
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                  alt="Bitcoin"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                  alt="Ethereum"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                  alt="USDT"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/monero-xmr-logo.png"
                  alt="Monero"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="Solana"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                  alt="USDC"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cryptologos.cc/logos/bnb-bnb-logo.png"
                  alt="BNB"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Sleep Coach Online. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "#85c1e9" }}
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "#85c1e9" }}
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "#85c1e9" }}
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
