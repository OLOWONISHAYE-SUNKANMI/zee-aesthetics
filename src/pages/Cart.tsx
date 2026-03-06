import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="font-display text-3xl text-foreground mb-4">Your Cart is Empty</h2>
        <p className="font-body text-muted-foreground mb-8">Discover our luxury collection</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <h1 className="font-display text-4xl font-light text-foreground mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-6 p-4 rounded-lg bg-card shadow-card"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-foreground">{item.product.name}</h3>
                  <p className="font-body text-sm text-gold">${item.product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-border rounded">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 text-muted-foreground hover:text-foreground">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 font-body text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 text-muted-foreground hover:text-foreground">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-body text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card h-fit sticky top-24">
          <h3 className="font-display text-xl text-foreground mb-6">Order Summary</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between font-body text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-body text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-gold">Free</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-body font-medium">
              <span>Total</span>
              <span className="text-gold text-lg">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block text-center bg-primary text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors w-full"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
