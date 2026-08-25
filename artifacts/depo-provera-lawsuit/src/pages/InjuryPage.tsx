import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { injuries } from "@/data/seo-pages";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";

export function InjuryPage() {
  const { slug } = useParams<{ slug: string }>();
  const injuryData = injuries.find(i => i.slug === slug) || injuries[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                  Depo-Provera {injuryData.name} Lawsuits
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="text-xl font-medium text-secondary mb-6">
                    A diagnosis of {injuryData.medicalTerm} is terrifying and life-changing. We understand the profound physical, emotional, and financial impact this has on you and your family.
                  </p>
                  
                  <p>
                    {injuryData.description}
                  </p>
                  
                  <p>
                    Recent medical studies have highlighted a concerning link between the long-term use of the Depo-Provera birth control injection and an increased risk of severe injuries like {injuryData.name}. Pharmaceutical companies have a legal duty to warn patients of these devastating side effects.
                  </p>

                  <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Common Symptoms:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                    {injuryData.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                        {symptom}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Do You Qualify for Compensation?</h3>
                  <p>
                    If you used Depo-Provera and were subsequently diagnosed with {injuryData.name}, you may be entitled to significant financial recovery. Our firm specializes in connecting victims with experienced product liability attorneys who will evaluate your claim and fight for your rights.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 text-center mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Let Us Help You Fight Back</h3>
                  <p className="mb-6 text-muted-foreground">Start your free case evaluation today. There are no upfront costs, and the lawyers we connect you with work on a contingency basis.</p>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg">
                    Get Your Free Case Evaluation
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-secondary mb-4">Other Related Injuries</h3>
                <ul className="space-y-2">
                  {injuries.map(i => (
                    <li key={i.slug}>
                      <Link href={`/injury/${i.slug}`} className="text-primary hover:underline text-sm block py-1">
                        {i.name}
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