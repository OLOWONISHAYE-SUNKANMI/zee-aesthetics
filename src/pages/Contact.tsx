import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full bg-background border ${errors[field] ? "border-destructive" : "border-border"} rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors`;

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Get In Touch</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-foreground">Contact Us</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Your name" />
            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="your@email.com" />
            {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className={inputClass("message") + " min-h-[150px]"} placeholder="Your message..." />
            {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors w-full"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {[
            { icon: Mail, label: "Email", value: "info@zeeaesthetics.com" },
            { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
            { icon: MapPin, label: "Address", value: "Lagos, Nigeria" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                <p className="font-body text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
