import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Do I qualify for a Depo-Provera lawsuit?",
      answer: "You may qualify if you received Depo-Provera injections (usually for birth control or endometriosis) and were subsequently diagnosed with an intracranial meningioma. We offer a free, confidential case evaluation to determine if you meet the specific criteria to be connected with a legal team."
    },
    {
      question: "How long do I have to file a claim?",
      answer: "The time limit to file, known as the statute of limitations, varies by state. It typically ranges from 1 to 3 years from the date of your diagnosis or the date you reasonably should have known the injury was linked to the drug. Because these deadlines are strict, it is crucial to start your case evaluation immediately."
    },
    {
      question: "What is a meningioma?",
      answer: "A meningioma is a tumor that arises from the meninges, the membranes that surround your brain and spinal cord. While most are benign (non-cancerous), they can grow and press on critical areas of the brain, causing serious symptoms like headaches, vision problems, seizures, and requiring high-risk brain surgery to remove."
    },
    {
      question: "What compensation can I recover?",
      answer: "If your claim is successful, you may be able to recover compensation for past and future medical expenses (including surgery and rehabilitation), lost wages, loss of earning capacity, pain and suffering, emotional distress, and loss of enjoyment of life."
    },
    {
      question: "How much does it cost?",
      answer: "We offer completely free case evaluations. The attorneys in our network represent clients on a contingency fee basis. This means there are zero upfront costs or hourly fees. You only pay legal fees as a percentage of the recovery if the attorneys successfully secure a settlement or jury verdict in your favor."
    },
    {
      question: "Will I have to go to court?",
      answer: "The vast majority of pharmaceutical product liability cases are resolved through negotiated settlements outside of court. However, the experienced trial attorneys in our network prepare every case as if it will go to trial to ensure you receive a fair settlement."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-primary font-semibold tracking-wider uppercase text-sm">Common Questions</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              We know you have questions. We are here to provide clear, honest answers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}