import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Radiance Glow Serum",
    price: 68,
    image: product1,
    description: "A luxurious vitamin C serum that brightens and evens skin tone, leaving your complexion with an unmistakable golden glow. Formulated with hyaluronic acid and botanical extracts for deep hydration.",
    category: "Serums",
    featured: true,
  },
  {
    id: "2",
    name: "Velvet Hydra Cream",
    price: 85,
    image: product2,
    description: "An ultra-rich moisturizing cream infused with shea butter, squalane, and gold nanoparticles. Provides 72-hour hydration while creating a soft, velvety finish on the skin.",
    category: "Moisturizers",
    featured: true,
  },
  {
    id: "3",
    name: "Golden Elixir Face Oil",
    price: 95,
    image: product3,
    description: "A precious blend of rosehip, jojoba, and argan oils enriched with 24K gold flakes. This multi-tasking oil nourishes, firms, and gives skin a luminous, youthful radiance.",
    category: "Oils",
    featured: true,
  },
  {
    id: "4",
    name: "Revive Eye Cream",
    price: 55,
    image: product4,
    description: "A targeted treatment for the delicate eye area. Reduces dark circles, puffiness, and fine lines with peptides, caffeine, and retinol encapsulated in gold microspheres.",
    category: "Eye Care",
    featured: true,
  },
  {
    id: "5",
    name: "Crystal Clear Toner",
    price: 42,
    image: product5,
    description: "A gentle, alcohol-free toner that balances pH, tightens pores, and prepares skin for maximum absorption. Infused with rose water and niacinamide for a refined complexion.",
    category: "Toners",
    featured: false,
  },
  {
    id: "6",
    name: "Luxe Lip Treatment",
    price: 38,
    image: product6,
    description: "A nourishing lip treatment that hydrates, plumps, and adds a subtle golden shimmer. Made with collagen-boosting peptides and natural beeswax for silky-soft lips.",
    category: "Lip Care",
    featured: false,
  },
];
