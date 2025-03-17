import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SiteDrawings() {
  const [currentDrawing, setCurrentDrawing] = useState(0);

  const drawings = [
    {
      title: "Basic Layout",
      description: "Initial wireframe showing the core structure and sections",
      image: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="800" height="600" fill="#f8fafc" />

          {/* Header */}
          <rect x="0" y="0" width="800" height="70" fill="#e2e8f0" />
          <rect x="20" y="20" width="180" height="30" rx="5" fill="#94a3b8" />
          <rect x="600" y="20" width="60" height="30" rx="5" fill="#94a3b8" />
          <rect x="680" y="20" width="100" height="30" rx="5" fill="#94a3b8" />

          {/* Hero Section */}
          <rect x="0" y="70" width="800" height="300" fill="#dbeafe" />
          <rect x="50" y="120" width="300" height="40" rx="5" fill="#94a3b8" />
          <rect x="50" y="170" width="350" height="20" rx="5" fill="#94a3b8" />
          <rect x="50" y="200" width="350" height="20" rx="5" fill="#94a3b8" />
          <rect x="50" y="250" width="120" height="40" rx="5" fill="#60a5fa" />
          <rect
            x="190"
            y="250"
            width="120"
            height="40"
            rx="5"
            stroke="#94a3b8"
            strokeWidth="2"
            fill="transparent"
          />

          <rect
            x="500"
            y="120"
            width="250"
            height="200"
            rx="10"
            fill="#bfdbfe"
          />

          {/* About Section */}
          <rect x="0" y="370" width="800" height="230" fill="#f1f5f9" />
          <rect x="250" y="390" width="300" height="30" rx="5" fill="#94a3b8" />

          <rect
            x="50"
            y="440"
            width="300"
            height="120"
            rx="10"
            fill="#e2e8f0"
          />
          <rect
            x="450"
            y="440"
            width="300"
            height="120"
            rx="10"
            fill="#e2e8f0"
          />
        </svg>
      ),
    },
    {
      title: "Improved Design",
      description:
        "Enhanced layout with more detailed sections and visual hierarchy",
      image: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="800" height="600" fill="#f8fafc" />
          <ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="150"
            fill="#bfdbfe"
            opacity="0.3"
          />
          <ellipse
            cx="600"
            cy="400"
            rx="150"
            ry="150"
            fill="#93c5fd"
            opacity="0.3"
          />

          {/* Header */}
          <rect
            x="0"
            y="0"
            width="800"
            height="70"
            fill="#ffffff"
            fillOpacity="0.8"
          />
          <rect x="20" y="20" width="180" height="30" rx="5" fill="#3b82f6" />
          <rect x="400" y="25" width="60" height="20" rx="5" fill="#64748b" />
          <rect x="480" y="25" width="60" height="20" rx="5" fill="#64748b" />
          <rect x="560" y="25" width="60" height="20" rx="5" fill="#64748b" />
          <rect x="680" y="15" width="100" height="40" rx="20" fill="#1e40af" />

          {/* Hero Section */}
          <rect x="0" y="70" width="800" height="330" fill="transparent" />
          <rect x="50" y="120" width="350" height="50" rx="5" fill="#1e40af" />
          <rect x="50" y="180" width="350" height="20" rx="5" fill="#64748b" />
          <rect x="50" y="210" width="350" height="20" rx="5" fill="#64748b" />
          <rect x="50" y="240" width="350" height="20" rx="5" fill="#64748b" />
          <rect x="50" y="290" width="140" height="50" rx="25" fill="#3b82f6" />
          <rect
            x="210"
            y="290"
            width="140"
            height="50"
            rx="25"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="transparent"
          />

          <rect
            x="500"
            y="120"
            width="250"
            height="200"
            rx="20"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <circle cx="625" cy="180" r="40" fill="#bfdbfe" />
          <rect x="550" y="240" width="150" height="15" rx="5" fill="#64748b" />
          <rect x="575" y="265" width="100" height="15" rx="5" fill="#94a3b8" />

          {/* About Section */}
          <rect x="0" y="400" width="800" height="200" fill="#f8fafc" />
          <rect x="300" y="420" width="200" height="40" rx="5" fill="#1e40af" />

          <rect
            x="50"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect
            x="290"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect
            x="530"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Final Design",
      description:
        "Polished UI with glassmorphism effects, animations, and complete content structure",
      image: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background with gradient */}
          <defs>
            <linearGradient
              id="bg-gradient"
              x1="0"
              y1="0"
              x2="800"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <radialGradient
              id="blob1"
              cx="200"
              cy="200"
              r="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#85c1e9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#85c1e9" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="blob2"
              cx="600"
              cy="400"
              r="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2e4053" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#2e4053" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="800" height="600" fill="url(#bg-gradient)" />
          <circle cx="200" cy="200" r="180" fill="url(#blob1)" />
          <circle cx="600" cy="400" r="200" fill="url(#blob2)" />

          {/* Navbar with glassmorphism */}
          <rect
            x="0"
            y="0"
            width="800"
            height="70"
            fill="#ffffff"
            fillOpacity="0.7"
          />
          <rect
            x="0"
            y="0"
            width="800"
            height="70"
            fill="#ffffff"
            fillOpacity="0.1"
          />

          {/* Logo */}
          <rect
            x="20"
            y="20"
            width="180"
            height="30"
            rx="5"
            fill="url(#bg-gradient)"
          />

          {/* Nav Links */}
          <rect x="350" y="25" width="60" height="20" rx="5" fill="#64748b" />
          <rect x="430" y="25" width="60" height="20" rx="5" fill="#64748b" />
          <rect x="510" y="25" width="60" height="20" rx="5" fill="#64748b" />

          {/* Theme toggle and sign in */}
          <circle cx="600" cy="35" r="15" fill="#e2e8f0" />
          <rect x="630" y="15" width="100" height="40" rx="20" fill="#2e4053" />

          {/* Hero Section */}
          <rect x="0" y="70" width="800" height="330" fill="transparent" />

          {/* Hero Text */}
          <defs>
            <linearGradient
              id="text-gradient"
              x1="50"
              y1="120"
              x2="400"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#85c1e9" />
              <stop offset="100%" stopColor="#2e4053" />
            </linearGradient>
          </defs>

          <rect
            x="50"
            y="120"
            width="350"
            height="50"
            rx="5"
            fill="url(#text-gradient)"
          />
          <rect x="50" y="180" width="350" height="20" rx="5" fill="#64748b" />
          <rect x="50" y="210" width="350" height="20" rx="5" fill="#64748b" />
          <rect x="50" y="240" width="350" height="20" rx="5" fill="#64748b" />

          {/* CTA Buttons */}
          <rect x="50" y="290" width="140" height="50" rx="25" fill="#85c1e9" />
          <rect
            x="210"
            y="290"
            width="140"
            height="50"
            rx="25"
            stroke="#2e4053"
            strokeWidth="2"
            fill="transparent"
          />

          {/* Hero Card with Glassmorphism */}
          <rect
            x="500"
            y="120"
            width="250"
            height="200"
            rx="20"
            fill="#ffffff"
            fillOpacity="0.3"
          />
          <rect
            x="500"
            y="120"
            width="250"
            height="200"
            rx="20"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="transparent"
          />

          {/* Sleep emoji */}
          <circle cx="625" cy="180" r="40" fill="#ffffff" fillOpacity="0.3" />
          <text x="610" y="195" fontSize="40" fontFamily="sans-serif">
            😴
          </text>

          {/* Stats card */}
          <rect
            x="470"
            y="250"
            width="180"
            height="80"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.7"
          />
          <rect
            x="470"
            y="250"
            width="180"
            height="80"
            rx="10"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="transparent"
          />
          <rect x="490" y="270" width="140" height="10" rx="5" fill="#2e4053" />
          <rect x="490" y="290" width="140" height="8" rx="4" fill="#e2e8f0" />
          <rect x="490" y="290" width="100" height="8" rx="4" fill="#85c1e9" />
          <text
            x="600"
            y="305"
            fontSize="10"
            fontFamily="sans-serif"
            fill="#64748b"
          >
            85%
          </text>

          {/* About Section */}
          <rect x="0" y="400" width="800" height="200" fill="transparent" />

          {/* Section Title */}
          <rect
            x="300"
            y="420"
            width="200"
            height="40"
            rx="5"
            fill="url(#text-gradient)"
          />

          {/* Feature Cards with Glassmorphism */}
          <rect
            x="50"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.5"
          />
          <rect
            x="50"
            y="480"
            width="220"
            height="100"
            rx="10"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="transparent"
          />
          <circle cx="80" cy="510" r="15" fill="#85c1e9" fillOpacity="0.5" />
          <rect x="110" y="500" width="140" height="10" rx="5" fill="#2e4053" />
          <rect x="110" y="520" width="140" height="8" rx="4" fill="#64748b" />
          <rect x="110" y="535" width="140" height="8" rx="4" fill="#64748b" />

          <rect
            x="290"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.5"
          />
          <rect
            x="290"
            y="480"
            width="220"
            height="100"
            rx="10"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="transparent"
          />
          <circle cx="320" cy="510" r="15" fill="#85c1e9" fillOpacity="0.5" />
          <rect x="350" y="500" width="140" height="10" rx="5" fill="#2e4053" />
          <rect x="350" y="520" width="140" height="8" rx="4" fill="#64748b" />
          <rect x="350" y="535" width="140" height="8" rx="4" fill="#64748b" />

          <rect
            x="530"
            y="480"
            width="220"
            height="100"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.5"
          />
          <rect
            x="530"
            y="480"
            width="220"
            height="100"
            rx="10"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="transparent"
          />
          <circle cx="560" cy="510" r="15" fill="#85c1e9" fillOpacity="0.5" />
          <rect x="590" y="500" width="140" height="10" rx="5" fill="#2e4053" />
          <rect x="590" y="520" width="140" height="8" rx="4" fill="#64748b" />
          <rect x="590" y="535" width="140" height="8" rx="4" fill="#64748b" />
        </svg>
      ),
    },
  ];

  const nextDrawing = () => {
    setCurrentDrawing((prev) => (prev === drawings.length - 1 ? 0 : prev + 1));
  };

  const prevDrawing = () => {
    setCurrentDrawing((prev) => (prev === 0 ? drawings.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Sleep Coach Online - UI Design Evolution
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Progression from wireframe to final polished design
        </p>

        <div className="relative">
          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            onClick={prevDrawing}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            onClick={nextDrawing}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Drawing display */}
          <motion.div
            key={currentDrawing}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
          >
            <div className="w-full h-full">
              {drawings[currentDrawing].image}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {drawings[currentDrawing].title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {drawings[currentDrawing].description}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {drawings.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDrawing(index)}
              className={`h-2 rounded-full transition-all ${index === currentDrawing ? "w-6 bg-blue-500" : "w-2 bg-gray-300 dark:bg-gray-600"}`}
              aria-label={`Go to drawing ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
