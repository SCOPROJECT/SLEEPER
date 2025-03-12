import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Dream Essence",
      description:
        "Natural sleep aid with melatonin, valerian root, and chamomile for gentle sleep support.",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      price: "$29.99",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Tranquil Mind",
      description:
        "Stress-reducing formula with L-theanine, magnesium, and GABA to calm your mind before sleep.",
      image:
        "https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&q=80",
      price: "$34.99",
      badge: null,
    },
    {
      id: 3,
      name: "Deep Sleep Complex",
      description:
        "Advanced formula for those with persistent sleep issues, featuring 5-HTP and zinc.",
      image:
        "https://images.unsplash.com/photo-1626397559626-78f5a1965c35?w=800&q=80",
      price: "$39.99",
      badge: "Premium",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#85c1e9]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#2e4053]/10 rounded-full filter blur-3xl" />

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
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
                    <Button className="bg-[#2e4053] hover:bg-[#1c2833] text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
