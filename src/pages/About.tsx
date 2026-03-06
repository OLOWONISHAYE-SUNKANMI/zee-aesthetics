import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const About = () => (
  <div>
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Story</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-foreground">About Zee Aesthetics</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-elevated"
        >
          <img src={aboutImage} alt="Zee Aesthetics brand story" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-light text-foreground mb-6">
            Beauty, Redefined
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Zee Aesthetics was born from a passion for creating luxury beauty products that
              celebrate the natural radiance within every individual. We believe that true beauty
              lies in the harmony between science and nature.
            </p>
            <p>
              Our formulations combine cutting-edge skincare technology with the finest natural
              ingredients sourced from around the world. Each product undergoes rigorous testing
              to ensure it delivers visible, transformative results.
            </p>
            <p>
              From our signature golden serums to our indulgent moisturizers, every Zee Aesthetics
              product is designed to elevate your daily skincare routine into a luxurious ritual
              of self-care and confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-beige py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { number: "100%", label: "Natural Ingredients" },
            { number: "50K+", label: "Happy Customers" },
            { number: "24K", label: "Gold-Infused Formulas" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-4xl text-gold mb-2">{stat.number}</p>
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
