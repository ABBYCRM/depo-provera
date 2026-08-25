import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileText, Scale } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 text-primary font-semibold tracking-wider uppercase text-sm">THE LAWSUIT</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 leading-tight">
              Understanding the Depo-Provera Litigation
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Depo-Provera (medroxyprogesterone acetate) is a widely used contraceptive injection administered every three months. Recent medical studies have linked the use of Depo-Provera to an increased risk of developing intracranial meningiomas—a type of tumor that forms on membranes covering the brain and spinal cord just inside the skull.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Lawsuits allege that the manufacturer, Pfizer, knew or should have known about this severe risk but failed to adequately warn patients and healthcare providers. Women across the country who suffered from these devastating tumors are now coming forward to demand accountability and compensation for their medical expenses, pain, and suffering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <AlertTriangle className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Failure to Warn</h4>
                  <p className="text-sm text-muted-foreground">Allegations that manufacturers hid known risks from the public.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Scale className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Seeking Justice</h4>
                  <p className="text-sm text-muted-foreground">Holding pharmaceutical giants accountable for harm.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl z-0"></div>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-8 relative z-10">Case Timeline & Urgency</h3>
            
            <div className="space-y-8 relative z-10">
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-bold shadow-sm shrink-0">1</div>
                  <div className="w-0.5 h-16 bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-lg font-bold text-secondary">The Studies</h4>
                  <p className="text-muted-foreground mt-1">Recent peer-reviewed medical studies published confirming the significant link between Depo-Provera and meningioma risk.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-bold shadow-sm shrink-0">2</div>
                  <div className="w-0.5 h-16 bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-lg font-bold text-secondary">Lawsuits Filed</h4>
                  <p className="text-muted-foreground mt-1">Victims across the nation begin filing lawsuits against Pfizer for failure to warn about these severe risks.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary border-2 border-primary flex items-center justify-center text-white font-bold shadow-md shrink-0">
                    <Clock size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary">Statute of Limitations</h4>
                  <p className="text-muted-foreground mt-1">Every state has strict deadlines (statute of limitations) to file a claim. If you wait too long, your right to compensation could be permanently barred.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-secondary font-medium flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                Case evaluations are currently open. Do not delay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}