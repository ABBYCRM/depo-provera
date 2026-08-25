import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { resources } from "@/data/seo-pages";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";

export function ResourcePage() {
  const { slug } = useParams<{ slug: string }>();
  const resourceData = resources.find(r => r.slug === slug) || resources[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                  {resourceData.title}
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="text-xl font-medium text-secondary mb-6">
                    {resourceData.description}
                  </p>
                  
                  <p>
                    {resourceData.content}
                  </p>
                  <p>
                    Understanding your rights and the medical science behind your injury is the first step toward getting justice. The pharmaceutical industry is massive, and taking them on requires specialized knowledge. We are dedicated to providing you with the information you need.
                  </p>
                  <p>
                    As a case acquisition firm, our primary goal is to ensure you understand your legal standing and to seamlessly connect you with top-tier law firms equipped to handle complex Depo-Provera litigation. We guide you through the initial steps so you never feel alone in this process.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 text-center mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Need Legal Assistance?</h3>
                  <p className="mb-6 text-muted-foreground">Start your free case evaluation today. There are no upfront costs, and the lawyers we connect you with work on a contingency basis.</p>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg">
                    Get Your Free Case Evaluation
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-secondary mb-4">More Resources</h3>
                <ul className="space-y-2">
                  {resources.map(r => (
                    <li key={r.slug}>
                      <Link href={`/resource/${r.slug}`} className="text-primary hover:underline text-sm block py-1">
                        {r.title}
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