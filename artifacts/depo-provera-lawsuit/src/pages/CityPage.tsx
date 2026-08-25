import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { cities } from "@/data/seo-pages";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";

export function CityPage() {
  const { slug } = useParams<{ slug: string }>();
  const cityData = cities.find(c => c.slug === slug) || cities[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                  Depo-Provera Lawsuit in {cityData.name}, {cityData.state}
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    If you reside in the {cityData.name} area and developed a meningioma after using Depo-Provera, you may have the right to file a legal claim. Our case acquisition firm helps victims across {cityData.state} connect with specialized pharmaceutical attorneys who can fight for your compensation.
                  </p>
                  
                  <p>
                    With a population of over {cityData.population}, {cityData.name} has many residents who may have been prescribed this birth control injection without being fully warned of the severe risks of brain tumors. Lawsuits involving {cityData.name} residents may involve proceedings connected to the {cityData.courts}.
                  </p>
                </div>

                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Steps to File a Claim in {cityData.name}</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <ol>
                    <li>Gather your medical records proving Depo-Provera use and your meningioma diagnosis from your local {cityData.name} healthcare providers.</li>
                    <li>Do not sign any documents from insurance or pharmaceutical representatives.</li>
                    <li>Contact us for a free case evaluation. We will immediately connect you with a specialized attorney.</li>
                  </ol>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 text-center mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Connect with a Depo-Provera Attorney</h3>
                  <p className="mb-6 text-muted-foreground">Start your free case evaluation today. There are no upfront costs, and the lawyers we connect you with work on a contingency basis.</p>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg">
                    Get Your Free Case Evaluation
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-secondary mb-4">Other Major Cities</h3>
                <ul className="space-y-2">
                  {cities.map(c => (
                    <li key={c.slug}>
                      <Link href={`/city/${c.slug}`} className="text-primary hover:underline text-sm block py-1">
                        Depo-Provera Claims in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}