import { Product, Kit } from "@/types/product";
import studyKitHero from "@/assets/study-kit-hero.jpg";
import skincareKitHero from "@/assets/skincare-kit-hero.jpg";
import travelKitHero from "@/assets/travel-kit-hero.jpg";

// Product images
import notebook1 from "@/assets/products/notebook-1.jpg";
import notebook2 from "@/assets/products/notebook-2.jpg";
import pen1 from "@/assets/products/pen-1.jpg";
import pen2 from "@/assets/products/pen-2.jpg";
import gadget1 from "@/assets/products/gadget-1.jpg";
import gadget2 from "@/assets/products/gadget-2.jpg";
import cleanser1 from "@/assets/products/cleanser-1.jpg";
import cleanser2 from "@/assets/products/cleanser-2.jpg";
import serum1 from "@/assets/products/serum-1.jpg";
import serum2 from "@/assets/products/serum-2.jpg";
import moisturizer1 from "@/assets/products/moisturizer-1.jpg";
import moisturizer2 from "@/assets/products/moisturizer-2.jpg";
import toiletries1 from "@/assets/products/toiletries-1.jpg";
import toiletries2 from "@/assets/products/toiletries-2.jpg";
import accessories1 from "@/assets/products/accessories-1.jpg";
import accessories2 from "@/assets/products/accessories-2.jpg";
import organization1 from "@/assets/products/organization-1.jpg";
import organization2 from "@/assets/products/organization-2.jpg";

export const kits: Kit[] = [
  {
    id: "study",
    name: "Study Kit",
    description: "Essential tools for productive learning and note-taking",
    categories: ["notebook", "pen", "gadget"],
    image: studyKitHero,
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: "skincare",
    name: "Skincare Kit", 
    description: "Complete skincare routine for healthy, glowing skin",
    categories: ["cleanser", "serum", "moisturizer"],
    image: skincareKitHero,
    color: "bg-pink-50 border-pink-200"
  },
  {
    id: "travel",
    name: "Travel Kit",
    description: "Compact essentials for your next adventure",
    categories: ["toiletries", "accessories", "organization"],
    image: travelKitHero, 
    color: "bg-green-50 border-green-200"
  }
];

export const products: Product[] = [
  // Study Kit Products
  {
    id: "notebook-1",
    name: "Premium Dotted Notebook",
    description: "High-quality paper with dot grid layout",
    price: 1299,
    image: notebook1,
    category: "notebook"
  },
  {
    id: "notebook-2", 
    name: "Minimalist Lined Journal",
    description: "Clean design with premium lined pages",
    price: 999,
    image: notebook2,
    category: "notebook"
  },
  {
    id: "pen-1",
    name: "Smooth Gel Pen Set",
    description: "Set of 3 premium gel pens in black, blue, red",
    price: 699,
    image: pen1, 
    category: "pen"
  },
  {
    id: "pen-2",
    name: "Mechanical Pencil Pro",
    description: "Professional 0.5mm mechanical pencil",
    price: 599,
    image: pen2,
    category: "pen"
  },
  {
    id: "gadget-1",
    name: "Digital Note Organizer",
    description: "Smart device for digital note organization",
    price: 3999,
    image: gadget1,
    category: "gadget"
  },
  {
    id: "gadget-2",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging for your devices",
    price: 1999,
    image: gadget2,
    category: "gadget"
  },

  // Skincare Kit Products
  {
    id: "cleanser-1",
    name: "Gentle Foam Cleanser",
    description: "Mild foaming cleanser for all skin types",
    price: 1499,
    image: cleanser1,
    category: "cleanser"
  },
  {
    id: "cleanser-2",
    name: "Hydrating Cream Cleanser", 
    description: "Rich cream cleanser for dry skin",
    price: 1899,
    image: cleanser2,
    category: "cleanser"
  },
  {
    id: "serum-1",
    name: "Vitamin C Brightening Serum",
    description: "Antioxidant serum for radiant skin",
    price: 2899,
    image: serum1,
    category: "serum"
  },
  {
    id: "serum-2",
    name: "Hyaluronic Acid Serum",
    description: "Deep hydration and plumping serum",
    price: 2399,
    image: serum2,
    category: "serum"
  },
  {
    id: "moisturizer-1",
    name: "Daily Hydrating Cream",
    description: "Lightweight daily moisturizer",
    price: 2199,
    image: moisturizer1,
    category: "moisturizer"
  },
  {
    id: "moisturizer-2",
    name: "Night Repair Cream",
    description: "Rich overnight moisturizer",
    price: 2699,
    image: moisturizer2, 
    category: "moisturizer"
  },

  // Travel Kit Products
  {
    id: "toiletries-1",
    name: "Travel Toiletry Set",
    description: "Compact shampoo, conditioner, and body wash",
    price: 1399,
    image: toiletries1,
    category: "toiletries"
  },
  {
    id: "toiletries-2", 
    name: "TSA-Approved Bottles",
    description: "Set of leak-proof travel containers",
    price: 999,
    image: toiletries2,
    category: "toiletries"
  },
  {
    id: "accessories-1",
    name: "Travel Adapter Kit",
    description: "Universal travel adapter with USB ports",
    price: 2399,
    image: accessories1,
    category: "accessories"
  },
  {
    id: "accessories-2",
    name: "Portable Phone Stand",
    description: "Foldable phone stand for travel",
    price: 1199,
    image: accessories2,
    category: "accessories"
  },
  {
    id: "organization-1",
    name: "Packing Cubes Set",
    description: "Set of 3 compression packing cubes",
    price: 1999,
    image: organization1,
    category: "organization"
  },
  {
    id: "organization-2",
    name: "Travel Document Organizer",
    description: "RFID-blocking passport and document wallet", 
    price: 1599,
    image: organization2,
    category: "organization"
  }
];