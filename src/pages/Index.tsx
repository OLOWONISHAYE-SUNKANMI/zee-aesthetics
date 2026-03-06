import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import aboutImage from "@/assets/about-image.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const testimonials = [
  {
    name: "Amara Johnson",
    review: "Zee Aesthetics transformed my skincare routine. The Golden Glow Serum gives my skin an incredible radiance that lasts all day.",
    rating: 5,
  },
  {
    name: "Sofia Chen",
    review: "I've tried countless luxury brands, but nothing compares to the quality and elegance of Zee Aesthetics products. Truly premium.",
    rating: 5,
  },
  {
    name: "Leila Okafor",
    review: "The Radiance Night Cream is a game-changer. I wake up with visibly smoother, more luminous skin every morning.",
    rating: 5,
  },
];

const Index = () => {
  const featured = products.filter((p) => p.featured);
  const [email, setEmail] = useState("");
  const { toast } = useToast();


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    toast({ title: "Welcome to the Zee Aesthetics community!", description: "You'll receive beauty updates soon." });
    setEmail("");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Zee Aesthetics luxury skincare collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
              Premium Beauty & Skincare
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground leading-tight mb-6">
              Unveil Your
              <br />
              <span className="text-gold italic">Golden</span> Glow
            </h1>
            <p className="font-body text-primary-foreground/80 text-base mb-8 max-w-md leading-relaxed">
              Discover luxury skincare crafted with the finest ingredients to reveal your natural radiance.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Curated For You</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Featured Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-gold hover:text-gold-dark transition-colors border-b border-gold pb-1"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About Zee Aesthetics */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={aboutImage}
                alt="Zee Aesthetics premium skincare"
                className="w-full h-[500px] object-cover rounded-lg shadow-elevated"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
                The Art of Beauty
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                At Zee Aesthetics, we believe beauty is an art form. Each product is meticulously crafted using
                the finest natural ingredients, blending science and luxury to create skincare that transforms
                and empowers.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our golden-infused formulas deliver visible results while providing a sensory
                experience that turns your daily routine into a ritual of self-care.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">What They Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
            Customer Testimonials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 shadow-card text-center"
            >
              <Quote className="w-8 h-8 text-gold/30 mx-auto mb-4" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.review}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-lg text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Stay Connected</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Join Our Beauty Community
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Subscribe for exclusive updates, skincare tips, and early access to new launches.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background border-border font-body"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-gold-dark font-body text-sm tracking-widest uppercase px-8"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
