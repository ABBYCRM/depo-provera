import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { states } from "@/data/seo-pages";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";

export function StatePage() {
  const { slug } = useParams<{ slug: string }>();
  const stateData = states.find(s => s.slug === slug) || states[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                  Depo-Provera Lawsuit in {stateData.name}
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    If you or a loved one in {stateData.name} developed a meningioma after using Depo-Provera, you may be entitled to significant financial compensation. Our case acquisition firm connects victims in {stateData.name} with experienced legal professionals who understand the complexities of pharmaceutical litigation.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-800 mb-2">Important Deadline Warning</h3>
                  <p className="text-red-700">
                    The statute of limitations in {stateData.name} is generally <strong>{stateData.filingDeadline}</strong>. {stateData.notes} Failure to file within this window means you may forever lose your right to claim compensation.
                  </p>
                </div>

                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">What Victims in {stateData.name} Need to Know</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    Recent studies have linked the use of the Depo-Provera birth control injection to an increased risk of developing intracranial meningiomas—dangerous tumors that form on the brain and spinal cord. We help residents of {stateData.name} find the right legal partners to hold pharmaceutical companies accountable.
                  </p>
                  <h3>Steps to File a Claim:</h3>
                  <ol>
                    <li>Gather your medical records proving Depo-Provera use and your meningioma diagnosis.</li>
                    <li>Do not sign any documents from insurance or pharmaceutical representatives.</li>
                    <li>Contact us for a free case evaluation. We will immediately connect you with a specialized attorney.</li>
                  </ol>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 text-center mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Connect with a Depo-Provera Attorney in {stateData.name}</h3>
                  <p className="mb-6 text-muted-foreground">Start your free case evaluation today. There are no upfront costs, and the lawyers we connect you with work on a contingency basis.</p>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg">
                    Get Your Free Case Evaluation
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-secondary mb-4">Other State Guides</h3>
                <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {states.map(s => (
                    <li key={s.slug}>
                      <Link href={`/state/${s.slug}`} className="text-primary hover:underline text-sm block py-1">
                        Depo-Provera Claims in {s.name}
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