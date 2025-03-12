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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent font-montserrat">
                Sleep Coach
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transforming lives through better sleep, one night at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-[#85c1e9] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
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
          </div>

          <div>
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
                className="bg-white dark:bg-gray-800"
              />
              <Button className="bg-[#2e4053] hover:bg-[#1c2833] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Sleep Coach Online. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#85c1e9] dark:hover:text-[#85c1e9] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
