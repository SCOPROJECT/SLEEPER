import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "free",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, consultationType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Submitted",
        description:
          "We'll contact you within 24 hours to schedule your consultation.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        consultationType: "free",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#85c1e9]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#2e4053]/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-[#85c1e9] to-[#2e4053] bg-clip-text text-transparent">
              Request a Consultation
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to schedule your personalized sleep
            consultation with one of our experts.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/50 dark:bg-gray-900/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/50 dark:bg-gray-900/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="bg-white/50 dark:bg-gray-900/50"
                />
              </div>

              <div className="space-y-3">
                <Label>Consultation Type</Label>
                <RadioGroup
                  value={formData.consultationType}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free" className="cursor-pointer">
                      Free Initial Consultation (30 min)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="cursor-pointer">
                      Premium Consultation (60 min, $99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comprehensive" id="comprehensive" />
                    <Label htmlFor="comprehensive" className="cursor-pointer">
                      Comprehensive Assessment (90 min, $149)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Tell us about your sleep concerns
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share any details about your sleep issues that would help us prepare for your consultation..."
                  rows={4}
                  className="bg-white/50 dark:bg-gray-900/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#85c1e9] to-[#2e4053] hover:from-[#5dade2] hover:to-[#1c2833] text-white font-medium py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
