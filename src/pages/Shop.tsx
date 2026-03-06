import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Shop = () => (
  <div className="container mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">Our Collection</p>
      <h1 className="font-display text-4xl md:text-5xl font-light text-foreground">Shop All Products</h1>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  </div>
);

export default Shop;
