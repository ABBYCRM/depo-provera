import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, HandHeart, Scale } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Proven Network Track Record",
      description: "Attorneys in our network have recovered hundreds of millions for victims of dangerous drugs. They know how to take on pharmaceutical giants and win.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />
    },
    {
      title: "Compassionate Support",
      description: "You aren't just a lead. We provide deeply human, empathetic support to understand your situation before connecting you to the best legal partners for your unique case.",
      icon: <HandHeart className="h-10 w-10 text-primary" />
    },
    {
      title: "No Fee Guarantee",
      description: "We connect you with attorneys who work on a contingency fee basis. That means you pay absolutely nothing upfront, and you only pay legal fees if they secure a settlement or verdict for you.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />
    },
    {
      title: "Specialized Legal Partners",
      description: "Complex pharmaceutical litigation requires specialized knowledge. The legal teams in our network work with top medical experts to build undeniable cases.",
      icon: <Scale className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-primary font-semibold tracking-wider uppercase text-sm">Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Fierce Network. Human Approach.
            </h2>
            <p className="text-lg text-muted-foreground">
              When you are fighting for your life against a massive pharmaceutical company, you need a powerful legal team. We help connect you to top-tier representation with the resources to battle giants.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="mx-auto w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-primary/5 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">$500M+</div>
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Recovered By Network</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">25+</div>
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Combined Network Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">24/7</div>
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Intake Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">Free</div>
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Case Evaluations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}