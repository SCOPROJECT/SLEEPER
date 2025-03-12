import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../../supabase/auth";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent font-montserrat">
              Sleep Coach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              About Us
            </a>
            <a
              href="#products"
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Products
            </a>
            <a
              href="#pricing"
              className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Pricing
            </a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <Link to="/dashboard">
                  <Button
                    variant="default"
                    className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button
                    variant="default"
                    className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
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
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#products"
                className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#pricing"
                className="font-montserrat text-gray-700 dark:text-gray-200 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
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
          </div>
        )}
      </div>
    </header>
  );
}
