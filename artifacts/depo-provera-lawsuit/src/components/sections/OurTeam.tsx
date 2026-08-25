import { motion } from "framer-motion";
import attorney1 from "@assets/attorney-1.png";
import attorney2 from "@assets/attorney-2.png";
import attorney3 from "@assets/attorney-3.png";

export function OurTeam() {
  const team = [
    {
      name: "Sarah Jenkins",
      role: "Lead Case Specialist",
      bio: "Sarah has dedicated her career to helping victims of pharmaceutical giants find the right representation. With years of experience in complex medical device intake, she ensures every client's story is heard and paired with the best legal teams.",
      image: attorney1
    },
    {
      name: "Michael Chen",
      role: "Client Advocate",
      bio: "Michael brings invaluable insight into navigating the complicated landscape of mass torts. He guides our clients through the initial steps of the evaluation process with deep empathy and clarity.",
      image: attorney2
    },
    {
      name: "Elena Rodriguez",
      role: "Legal Intake Coordinator",
      bio: "Elena's fierce dedication ensures that crucial details are gathered efficiently, allowing our network attorneys to build strong cases. She is deeply passionate about women's health issues.",
      image: attorney3
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-primary font-semibold tracking-wider uppercase text-sm">Leadership</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Meet Your Case Specialists
            </h2>
            <p className="text-lg text-slate-300">
              Our dedicated intake and advocacy team ensures you are connected to the exact legal resources you need for your Depo-Provera claim.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply"></div>
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-1">{attorney.name}</h3>
              <div className="text-primary font-medium text-sm uppercase tracking-wider mb-4">{attorney.role}</div>
              <p className="text-slate-400 leading-relaxed">
                {attorney.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}