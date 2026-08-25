import { motion } from "framer-motion";
import { Activity, Brain, ShieldAlert, HeartPulse } from "lucide-react";

export function Injuries() {
  const injuries = [
    {
      title: "Intracranial Meningioma",
      description: "The primary injury linked to Depo-Provera use. These are tumors that form on the meninges (the membranes covering the brain and spinal cord). While often non-cancerous, their location can make them life-threatening.",
      icon: <Brain className="h-8 w-8 text-primary" />,
      symptoms: ["Severe, persistent headaches", "Vision changes or loss", "Seizures", "Hearing loss or ringing"]
    },
    {
      title: "Surgical Complications",
      description: "Treatment for meningiomas often requires invasive brain surgery (craniotomy). These procedures carry immense risk and require long, painful recovery periods.",
      icon: <Activity className="h-8 w-8 text-primary" />,
      symptoms: ["Cognitive impairment", "Motor function loss", "Infection risks", "Extended hospitalization"]
    },
    {
      title: "Neurological Deficits",
      description: "Even after treatment, many victims suffer from long-term or permanent neurological damage caused by the tumor pressing on critical areas of the brain.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      symptoms: ["Memory loss", "Personality changes", "Weakness in limbs", "Speech difficulties"]
    },
    {
      title: "Emotional & Financial Toll",
      description: "The devastating impact extends beyond physical injuries. Victims face overwhelming medical bills, lost wages, and severe emotional distress.",
      icon: <ShieldAlert className="h-8 w-8 text-primary" />,
      symptoms: ["Mounting medical debt", "Loss of earning capacity", "Depression and anxiety", "Decreased quality of life"]
    }
  ];

  return (
    <section id="injuries" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-primary font-semibold tracking-wider uppercase text-sm">The Impact</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Devastating Injuries Linked to Depo-Provera
            </h2>
            <p className="text-lg text-muted-foreground">
              A meningioma diagnosis changes your life in an instant. The physical, emotional, and financial burdens placed on victims are immense, and those responsible must be held accountable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {injuries.map((injury, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  {injury.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{injury.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {injury.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Common Symptoms & Effects:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {injury.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-secondary text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Did you suffer these injuries?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            You don't have to face this alone. We understand the profound impact these tumors have on your life. Let our experienced legal team evaluate your case completely free of charge.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            data-testid="button-injuries-cta"
          >
            Review My Case For Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}