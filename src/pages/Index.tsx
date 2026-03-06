import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featured = products.filter((p) => p.featured);

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

      {/* Brand Story Snippet */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              The Art of Beauty
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              At Zee Aesthetics, we believe beauty is an art form. Each product is meticulously crafted using
              the finest natural ingredients, blending science and luxury to create skincare that transforms
              and empowers. Our golden-infused formulas deliver visible results while providing a sensory
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
      </section>
    </div>
  );
};

export default Index;
