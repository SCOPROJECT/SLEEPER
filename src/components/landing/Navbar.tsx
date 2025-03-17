import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { useAuth } from "../../../supabase/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [basketCount, setBasketCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent font-montserrat"
                animate={{
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                Sleep Coach Online
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              About Us
            </motion.a>
            <motion.a
              href="#products"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Products
            </motion.a>
            <motion.a
              href="#pricing"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Pricing
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <ShoppingBasket className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] cursor-pointer" />
                {basketCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#85c1e9] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {basketCount}
                  </span>
                )}
              </div>
              <ThemeToggle />
              {user ? (
                <Link to="/dashboard">
                  <Button
                    variant="default"
                    className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    as={motion.button}
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button
                    variant="default"
                    className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    as={motion.button}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <div className="relative">
              <ShoppingBasket className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] cursor-pointer" />
              {basketCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#85c1e9] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {basketCount}
                </span>
              )}
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-2"
            >
              <nav className="flex flex-col space-y-4">
                <motion.a
                  href="#about"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#products"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </motion.a>
                <motion.a
                  href="#pricing"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </motion.a>
                {user ? (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="default"
                      className="bg-[#2e4053] hover:bg-[#1c2833] text-white w-full"
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="default"
                      className="bg-[#2e4053] hover:bg-[#1c2833] text-white w-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
