import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { states, cities, injuries, resources, info } from "@/data/seo-pages";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Depo-Provera Lawsuit Resources
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Explore our comprehensive guides to understand your legal rights regarding Depo-Provera injuries. We connect victims nationwide with experienced pharmaceutical attorneys.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">Information & Topics</h2>
                <ul className="space-y-2">
                  {info.map(item => (
                    <li key={item.slug}>
                      <Link href={`/info/${item.slug}`} className="text-primary hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-secondary mt-10 mb-4 border-b pb-2">Legal Resources</h2>
                <ul className="space-y-2">
                  {resources.map(item => (
                    <li key={item.slug}>
                      <Link href={`/resource/${item.slug}`} className="text-primary hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-secondary mt-10 mb-4 border-b pb-2">Covered Injuries</h2>
                <ul className="space-y-2">
                  {injuries.map(item => (
                    <li key={item.slug}>
                      <Link href={`/injury/${item.slug}`} className="text-primary hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">Major Cities</h2>
                <ul className="space-y-2">
                  {cities.map(item => (
                    <li key={item.slug}>
                      <Link href={`/city/${item.slug}`} className="text-primary hover:underline">
                        Lawsuits in {item.name}, {item.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">State Guides</h2>
                <ul className="space-y-2 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {states.map(item => (
                    <li key={item.slug}>
                      <Link href={`/state/${item.slug}`} className="text-primary hover:underline">
                        Depo-Provera Claims in {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}