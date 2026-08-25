import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/#" + id);
      return;
    }
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
    }
  };

  const navLinks = [
    { name: "About the Lawsuit", id: "about" },
    { name: "Your Injuries", id: "injuries" },
    { name: "Why Choose Us", id: "why-us" },
    { name: "Our Team", id: "team" },
    { name: "FAQs", id: "faq" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location !== "/" ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group" data-testid="link-home-logo">
            <div className="bg-primary text-white p-2 rounded-sm group-hover:bg-primary/90 transition-colors">
              <Scale size={24} />
            </div>
            <div className={`font-serif font-bold text-xl tracking-tight ${isScrolled || location !== "/" ? 'text-secondary' : 'text-secondary md:text-white'}`}>
              Justice <span className="text-primary">Advocates</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isScrolled || location !== "/" ? 'text-secondary/80' : 'text-white/90 hover:text-white'
                    }`}
                    data-testid={`link-nav-${link.id}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <Link 
                  href="/sitemap"
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    isScrolled || location !== "/" ? 'text-secondary/80' : 'text-white/90 hover:text-white'
                  }`}
                >
                  All Resources
                </Link>
              </li>
            </ul>
            <Button 
              onClick={() => scrollTo("contact")} 
              variant={isScrolled || location !== "/" ? "default" : "secondary"}
              className={!(isScrolled || location !== "/") ? "bg-white text-secondary hover:bg-white/90" : ""}
              data-testid="button-nav-contact"
            >
              Free Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={!(isScrolled || location !== "/") ? "text-white" : ""} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollTo(link.id)}
                  className="text-base font-medium text-secondary/80 hover:text-primary transition-colors w-full text-left"
                  data-testid={`link-mobile-nav-${link.id}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <Link 
                href="/sitemap"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-secondary/80 hover:text-primary transition-colors w-full text-left block"
              >
                All Resources
              </Link>
            </li>
          </ul>
          <Button 
            onClick={() => scrollTo("contact")} 
            className="w-full mt-2"
            data-testid="button-mobile-contact"
          >
            Free Consultation
          </Button>
        </div>
      )}
    </header>
  );
}