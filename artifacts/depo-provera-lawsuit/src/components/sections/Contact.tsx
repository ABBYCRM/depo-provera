import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  injuryDescription: z.string().min(10, "Please provide a brief description of your injuries"),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      injuryDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-secondary hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Left Side - Info */}
          <div className="bg-secondary text-white p-10 md:p-16 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Take The First Step Towards Justice.
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Contact us today for a free, confidential case evaluation. Our team is standing by to listen to your story and help connect you to an experienced attorney to fight for the compensation you deserve.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Submit Your Details</h4>
                    <p className="text-slate-400 text-sm">Provide basic information about your situation using our secure form.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Free Case Review</h4>
                    <p className="text-slate-400 text-sm">Our case specialists will immediately review your submission to see if you qualify.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">We Connect You</h4>
                    <p className="text-slate-400 text-sm">If you qualify, we immediately connect you with a dedicated legal team who will fight for your recovery with no upfront costs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-slate-50 p-10 md:p-16">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-secondary">Request Received</h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  Thank you for reaching out. Your information has been securely transmitted. A case specialist will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-secondary mb-8">Request Your Free Case Evaluation</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-semibold">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane" className="bg-white" {...field} data-testid="input-firstname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-semibold">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" className="bg-white" {...field} data-testid="input-lastname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" className="bg-white" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-semibold">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" className="bg-white" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="injuryDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-semibold">Brief Description of Diagnosis</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please briefly describe when you used Depo-Provera and when you were diagnosed..." 
                              className="min-h-[120px] bg-white resize-y" 
                              {...field} 
                              data-testid="input-description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6"
                      data-testid="button-submit-form"
                    >
                      Submit For Free Review
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting this form, you agree to our privacy policy. Information provided is confidential but does not constitute an attorney-client relationship until a formal agreement is signed with a law firm in our network.
                    </p>
                  </form>
                </Form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}