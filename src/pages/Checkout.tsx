import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(500),
  city: z.string().trim().min(1, "City is required").max(100),
});

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", address: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // Simulate payment
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/order-confirmation");
  };

  const inputClass = (field: string) =>
    `w-full bg-background border ${errors[field] ? "border-destructive" : "border-border"} rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors`;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-light text-foreground mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="lg:col-span-2 space-y-6"
        >
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className={inputClass("fullName")} placeholder="Your full name" />
            {errors.fullName && <p className="text-destructive text-xs mt-1 font-body">{errors.fullName}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="your@email.com" />
              {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+234 800 000 0000" />
              {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Delivery Address</label>
            <textarea name="address" value={form.address} onChange={handleChange} className={inputClass("address") + " min-h-[80px]"} placeholder="Full delivery address" />
            {errors.address && <p className="text-destructive text-xs mt-1 font-body">{errors.address}</p>}
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">City</label>
            <input name="city" value={form.city} onChange={handleChange} className={inputClass("city")} placeholder="City" />
            {errors.city && <p className="text-destructive text-xs mt-1 font-body">{errors.city}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </motion.form>

        <div className="bg-card rounded-lg p-8 shadow-card h-fit">
          <h3 className="font-display text-xl text-foreground mb-6">Your Order</h3>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 flex justify-between font-body font-medium">
            <span>Total</span>
            <span className="text-gold text-lg">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
