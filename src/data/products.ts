import { Product, Kit } from "@/types/product";

export const kits: Kit[] = [
  {
    id: "study",
    name: "Study Kit",
    description: "Essential tools for productive learning and note-taking",
    categories: ["notebook", "pen", "gadget"],
    image: "/api/placeholder/400/300",
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: "skincare",
    name: "Skincare Kit", 
    description: "Complete skincare routine for healthy, glowing skin",
    categories: ["cleanser", "serum", "moisturizer"],
    image: "/api/placeholder/400/300",
    color: "bg-pink-50 border-pink-200"
  },
  {
    id: "travel",
    name: "Travel Kit",
    description: "Compact essentials for your next adventure",
    categories: ["toiletries", "accessories", "organization"],
    image: "/api/placeholder/400/300", 
    color: "bg-green-50 border-green-200"
  }
];

export const products: Product[] = [
  // Study Kit Products
  {
    id: "notebook-1",
    name: "Premium Dotted Notebook",
    description: "High-quality paper with dot grid layout",
    price: 15.99,
    image: "/api/placeholder/200/200",
    category: "notebook"
  },
  {
    id: "notebook-2", 
    name: "Minimalist Lined Journal",
    description: "Clean design with premium lined pages",
    price: 12.99,
    image: "/api/placeholder/200/200",
    category: "notebook"
  },
  {
    id: "pen-1",
    name: "Smooth Gel Pen Set",
    description: "Set of 3 premium gel pens in black, blue, red",
    price: 8.99,
    image: "/api/placeholder/200/200", 
    category: "pen"
  },
  {
    id: "pen-2",
    name: "Mechanical Pencil Pro",
    description: "Professional 0.5mm mechanical pencil",
    price: 6.99,
    image: "/api/placeholder/200/200",
    category: "pen"
  },
  {
    id: "gadget-1",
    name: "Digital Note Organizer",
    description: "Smart device for digital note organization",
    price: 49.99,
    image: "/api/placeholder/200/200",
    category: "gadget"
  },
  {
    id: "gadget-2",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging for your devices",
    price: 24.99,
    image: "/api/placeholder/200/200",
    category: "gadget"
  },

  // Skincare Kit Products
  {
    id: "cleanser-1",
    name: "Gentle Foam Cleanser",
    description: "Mild foaming cleanser for all skin types",
    price: 18.99,
    image: "/api/placeholder/200/200",
    category: "cleanser"
  },
  {
    id: "cleanser-2",
    name: "Hydrating Cream Cleanser", 
    description: "Rich cream cleanser for dry skin",
    price: 22.99,
    image: "/api/placeholder/200/200",
    category: "cleanser"
  },
  {
    id: "serum-1",
    name: "Vitamin C Brightening Serum",
    description: "Antioxidant serum for radiant skin",
    price: 34.99,
    image: "/api/placeholder/200/200",
    category: "serum"
  },
  {
    id: "serum-2",
    name: "Hyaluronic Acid Serum",
    description: "Deep hydration and plumping serum",
    price: 28.99,
    image: "/api/placeholder/200/200",
    category: "serum"
  },
  {
    id: "moisturizer-1",
    name: "Daily Hydrating Cream",
    description: "Lightweight daily moisturizer",
    price: 26.99,
    image: "/api/placeholder/200/200",
    category: "moisturizer"
  },
  {
    id: "moisturizer-2",
    name: "Night Repair Cream",
    description: "Rich overnight moisturizer",
    price: 32.99,
    image: "/api/placeholder/200/200", 
    category: "moisturizer"
  },

  // Travel Kit Products
  {
    id: "toiletries-1",
    name: "Travel Toiletry Set",
    description: "Compact shampoo, conditioner, and body wash",
    price: 16.99,
    image: "/api/placeholder/200/200",
    category: "toiletries"
  },
  {
    id: "toiletries-2", 
    name: "TSA-Approved Bottles",
    description: "Set of leak-proof travel containers",
    price: 12.99,
    image: "/api/placeholder/200/200",
    category: "toiletries"
  },
  {
    id: "accessories-1",
    name: "Travel Adapter Kit",
    description: "Universal travel adapter with USB ports",
    price: 29.99,
    image: "/api/placeholder/200/200",
    category: "accessories"
  },
  {
    id: "accessories-2",
    name: "Portable Phone Stand",
    description: "Foldable phone stand for travel",
    price: 14.99,
    image: "/api/placeholder/200/200",
    category: "accessories"
  },
  {
    id: "organization-1",
    name: "Packing Cubes Set",
    description: "Set of 3 compression packing cubes",
    price: 24.99,
    image: "/api/placeholder/200/200",
    category: "organization"
  },
  {
    id: "organization-2",
    name: "Travel Document Organizer",
    description: "RFID-blocking passport and document wallet", 
    price: 19.99,
    image: "/api/placeholder/200/200",
    category: "organization"
  }
];