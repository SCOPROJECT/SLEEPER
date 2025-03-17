import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";

export default function ProductsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const products = [
    {
      id: 1,
      name: "Lunar Rest",
      description:
        "Natural melatonin supplement that regulates sleep-wake cycles and helps with jet lag and insomnia.",
      emoji: "🌙",
      price: "£15",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Calm Cascade",
      description:
        "Magnesium formula that relaxes muscles and supports GABA production for better sleep quality.",
      emoji: "💧",
      price: "£13",
      badge: null,
    },
    {
      id: 3,
      name: "Night Restore",
      description:
        "Glycine supplement that lowers body temperature and improves overall sleep quality.",
      emoji: "✨",
      price: "£10",
      badge: null,
    },
    {
      id: 4,
      name: "Serene Mind",
      description:
        "L-Theanine formula that promotes relaxation and increases alpha brain waves for better sleep.",
      emoji: "🧠",
      price: "£15",
      badge: null,
    },
    {
      id: 5,
      name: "Dream Enhancer",
      description:
        "5-HTP supplement that boosts serotonin and melatonin production to aid sleep quality.",
      emoji: "💫",
      price: "£18",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Nature's Lullaby",
      description:
        "Valerian Root extract with sedative effects that improves sleep latency and quality.",
      emoji: "🌿",
      price: "£12",
      badge: null,
    },
    {
      id: 7,
      name: "Tranquil Bloom",
      description:
        "Passionflower supplement that increases GABA levels and reduces brain activity for better sleep.",
      emoji: "🌸",
      price: "£13",
      badge: null,
    },
    {
      id: 8,
      name: "Stress Shield",
      description:
        "Ashwagandha formula that reduces stress and cortisol levels while enhancing relaxation.",
      emoji: "🛡️",
      price: "£20",
      badge: "Premium",
    },
    {
      id: 9,
      name: "Gentle Slumber",
      description:
        "Chamomile extract with mild sedative effects containing sleep-promoting apigenin.",
      emoji: "🌼",
      price: "£10",
      badge: null,
    },
    {
      id: 10,
      name: "Calm Clarity",
      description:
        "CBD formula that reduces anxiety, promotes relaxation, and aids with sleep disorders.",
      emoji: "🍃",
      price: "£35",
      badge: "Premium",
    },
    {
      id: 11,
      name: "Sleep Catalyst",
      description:
        "Tryptophan amino acid supplement that acts as a precursor to serotonin and melatonin.",
      emoji: "⚡",
      price: "£15",
      badge: null,
    },
    {
      id: 12,
      name: "Neural Calm",
      description:
        "GABA supplement that acts as an inhibitory neurotransmitter to calm the nervous system.",
      emoji: "🧿",
      price: "£15",
      badge: null,
    },
    {
      id: 13,
      name: "Citrus Serenity",
      description:
        "Lemon Balm extract that calms the mind and reduces stress-related sleep disturbances.",
      emoji: "🍋",
      price: "£10",
      badge: null,
    },
  ];

  // Only show first 3 products initially
  const displayProducts = showAllProducts ? products : products.slice(0, 3);

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
      id="products"
      ref={ref}
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]),
          }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#85c1e9]/10 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [50, -50]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]),
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#2e4053]/10 rounded-full filter blur-3xl"
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
              Sleep Supplements
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our premium sleep supplements are formulated with natural
            ingredients to support healthy sleep cycles and improve overall
            sleep quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#85c1e9]/30 to-[#2e4053]/30 dark:from-[#85c1e9]/20 dark:to-[#2e4053]/20 rounded-lg blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative h-full overflow-hidden backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-[#85c1e9]/20 to-[#2e4053]/20 dark:from-[#85c1e9]/10 dark:to-[#2e4053]/10 transition-transform duration-500 group-hover:scale-110">
                      <span className="text-7xl">{product.emoji}</span>
                    </div>
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 bg-[#85c1e9] text-white">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2e4053] dark:text-[#85c1e9] font-bold">
                        {product.price}
                      </span>
                      <Button
                        className="bg-[#2e4053] hover:bg-[#1c2833] text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        as={motion.button}
                      >
                        Add to Basket
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#85c1e9]/30 to-[#2e4053]/30 dark:from-[#85c1e9]/20 dark:to-[#2e4053]/20 rounded-full blur-xl"></div>
            <Button
              className="relative px-8 py-6 bg-gradient-to-r from-[#85c1e9] to-[#2e4053] hover:from-[#5dade2] hover:to-[#1c2833] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              as={motion.button}
              onClick={() => setShowAllProducts(!showAllProducts)}
            >
              {showAllProducts ? "Show Less" : "View All Supplements"}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
