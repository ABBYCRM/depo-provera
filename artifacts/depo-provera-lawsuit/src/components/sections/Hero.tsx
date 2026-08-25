import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useLocation } from "wouter";

export function Hero() {
  const [, setLocation] = useLocation();
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      setLocation("/#" + id);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-secondary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" 
          alt="Courthouse background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Connecting You With Top Legal Professionals
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              You Trusted Them With Your Health. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                We Connect You With The Right Legal Team.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              If you or a loved one developed a brain tumor (meningioma) after receiving Depo-Provera injections, you may be entitled to significant financial compensation. We help you find a dedicated legal team to handle your case. Time is limited.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-6 shadow-lg shadow-primary/25"
                onClick={() => scrollTo("contact")}
                data-testid="button-hero-primary"
              >
                Start Your Free Case Evaluation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
                onClick={() => scrollTo("about")}
                data-testid="button-hero-secondary"
              >
                Learn About Your Rights
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Available 24/7</div>
                  <div className="text-white font-bold">1-800-JUSTICE</div>
                </div>
              </div>
              <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:block">No Fees Unless Network Attorneys Win Your Case</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}