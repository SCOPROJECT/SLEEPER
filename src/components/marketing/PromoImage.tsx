import React from "react";
import { motion } from "framer-motion";

export default function PromoImage() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 rounded-xl shadow-lg overflow-hidden border border-blue-100 dark:border-slate-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3"
        >
          🛌 Sleep Coach Online – Your Path to Restful Nights 🌙
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-slate-600 dark:text-slate-300 mb-6"
        >
          Struggling with sleepless nights? At SCO, we provide expert sleep
          coaching to help you wake up refreshed and full of energy. 🌟
        </motion.p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-4"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">👩‍🏫</span>
            <span className="text-slate-700 dark:text-slate-200">
              Personalized Coaching
            </span>
          </motion.div>
          <div className="hidden md:block text-slate-400">|</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🗓️</span>
            <span className="text-slate-700 dark:text-slate-200">
              Flexible Scheduling
            </span>
          </motion.div>
          <div className="hidden md:block text-slate-400">|</div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🧘‍♂️</span>
            <span className="text-slate-700 dark:text-slate-200">
              Proven Techniques
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Table */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Consultation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-100/30 dark:from-blue-800/30 dark:to-blue-900/30 rounded-lg blur-xl group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative backdrop-blur-md bg-white/70 dark:bg-slate-800/70 rounded-lg p-5 shadow-md border border-blue-50/80 dark:border-slate-700/80 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-4">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="text-3xl mb-2"
              >
                ☕
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                Free Consultation
              </h3>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  15 minutes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  General sleep tips
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Overview of services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  One-time only
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-slate-600 dark:text-slate-300">
                  No personalized plan
                </span>
              </li>
            </ul>
            <div className="text-center">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold text-slate-800 dark:text-white inline-block"
              >
                £0
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Premium Consultation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/40 to-blue-300/40 dark:from-indigo-700/40 dark:to-blue-700/40 rounded-lg blur-xl group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative backdrop-blur-md bg-white/70 dark:bg-slate-800/70 rounded-lg p-5 shadow-md border border-indigo-100/80 dark:border-indigo-800/80 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-4">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
                className="text-3xl mb-2"
              >
                💼
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                Premium Consultation
              </h3>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  60 minutes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Comprehensive sleep analysis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Personalized sleep plan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Ongoing support
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Access to premium resources
                </span>
              </li>
            </ul>
            <div className="text-center">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold text-slate-800 dark:text-white inline-block"
              >
                £75
              </motion.span>
              <span className="text-slate-600 dark:text-slate-400">
                {" "}
                per session
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="bg-indigo-100/70 dark:bg-indigo-950/70 backdrop-blur-sm p-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="text-slate-600 dark:text-slate-300"
        >
          Sleep Coach Online - Premium Sleep Solutions
        </motion.p>
      </motion.div>
    </div>
  );
}
