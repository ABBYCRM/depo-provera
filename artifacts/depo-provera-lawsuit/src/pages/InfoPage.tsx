import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { info } from "@/data/seo-pages";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";

export function InfoPage() {
  const { slug } = useParams<{ slug: string }>();
  const infoData = info.find(i => i.slug === slug) || info[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                  {infoData.title}
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="text-xl font-medium text-secondary mb-6">
                    {infoData.description}
                  </p>
                  
                  <p>
                    {infoData.content}
                  </p>
                  <p>
                    Navigating a product liability claim requires careful planning and the right legal partnerships. Our case acquisition team provides comprehensive support during the critical early stages of evaluating your potential Depo-Provera claim.
                  </p>
                  <p>
                    If you believe your injuries were caused by Pfizer's failure to warn patients about meningioma risks, you deserve an experienced legal team. We connect victims with attorneys who have track records of securing major settlements against pharmaceutical giants.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 text-center mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Connect with a Case Specialist</h3>
                  <p className="mb-6 text-muted-foreground">Start your free case evaluation today. There are no upfront costs, and the lawyers we connect you with work on a contingency basis.</p>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary text-white font-bold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg">
                    Get Your Free Case Evaluation
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-secondary mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  {info.map(i => (
                    <li key={i.slug}>
                      <Link href={`/info/${i.slug}`} className="text-primary hover:underline text-sm block py-1">
                        {i.title}
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