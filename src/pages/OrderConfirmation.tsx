import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => (
  <div className="container mx-auto px-6 py-24 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CheckCircle className="w-16 h-16 mx-auto text-gold mb-6" />
      <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
        Thank You!
      </h1>
      <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
        Your order has been placed successfully. We'll send you a confirmation email with your order details shortly.
      </p>
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
      >
        Continue Shopping
      </Link>
    </motion.div>
  </div>
);

export default OrderConfirmation;
