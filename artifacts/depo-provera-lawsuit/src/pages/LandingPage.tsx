import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Injuries } from "@/components/sections/Injuries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurTeam } from "@/components/sections/OurTeam";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/30">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Injuries />
        <WhyChooseUs />
        <OurTeam />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}