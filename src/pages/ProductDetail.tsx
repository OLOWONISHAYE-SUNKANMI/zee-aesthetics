import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl text-foreground mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-gold hover:text-gold-dark font-body text-sm uppercase tracking-widest">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-square rounded-lg overflow-hidden bg-beige"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-2">{product.category}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">{product.name}</h1>
          <p className="font-display text-2xl text-gold mb-6">${product.price.toFixed(2)}</p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center border border-border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 font-body text-sm min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 w-full lg:w-auto"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
