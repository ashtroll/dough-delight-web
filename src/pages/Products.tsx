
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  // Breads
  {
    id: 1,
    name: "Sourdough Bread",
    description: "Artisan sourdough bread with a perfect crust and chewy interior.",
    price: 6.95,
    image: "/sourdough-bread.jpg", 
    category: "bread"
  },
  {
    id: 2,
    name: "Baguette",
    description: "Traditional French baguette with crispy exterior and soft inside.",
    price: 4.50,
    image: "/baguette.jpg", 
    category: "bread"
  },
  {
    id: 3,
    name: "Multigrain Loaf",
    description: "Healthy multigrain bread packed with seeds and whole grains.",
    price: 5.95,
    image: "/multigrain.jpg", 
    category: "bread"
  },
  {
    id: 4,
    name: "Rye Bread",
    description: "Traditional rye bread with caraway seeds.",
    price: 5.50,
    image: "/rye-bread.jpg", 
    category: "bread"
  },
  
  // Pastries
  {
    id: 5,
    name: "Croissant",
    description: "Flaky, buttery croissants made from scratch daily.",
    price: 3.95,
    image: "/croissant.jpg",
    category: "pastry"
  },
  {
    id: 6,
    name: "Cinnamon Roll",
    description: "Soft rolls with cinnamon sugar swirl and cream cheese frosting.",
    price: 4.50,
    image: "/cinnamon-roll.jpg",
    category: "pastry"
  },
  {
    id: 7,
    name: "Almond Croissant",
    description: "Buttery croissant filled with almond cream and topped with sliced almonds.",
    price: 4.75,
    image: "/almond-croissant.jpg",
    category: "pastry"
  },
  {
    id: 8,
    name: "Pain au Chocolat",
    description: "Chocolate-filled croissant pastry.",
    price: 4.25,
    image: "/pain-au-chocolat.jpg",
    category: "pastry"
  },
  
  // Cakes
  {
    id: 9,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache frosting and chocolate shavings.",
    price: 28.95,
    image: "/chocolate-cake.jpg",
    category: "cake"
  },
  {
    id: 10,
    name: "Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting and walnut topping.",
    price: 26.95,
    image: "/carrot-cake.jpg",
    category: "cake"
  },
  {
    id: 11,
    name: "Lemon Tart",
    description: "Buttery crust filled with tangy lemon curd and topped with fresh berries.",
    price: 5.95,
    image: "/lemon-tart.jpg",
    category: "cake"
  },
  {
    id: 12,
    name: "Cheesecake",
    description: "Classic New York style cheesecake with graham cracker crust.",
    price: 6.50,
    image: "/cheesecake.jpg",
    category: "cake"
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-cream-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Menu</h1>
            <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
              Discover our selection of freshly baked goods made with the finest ingredients.
            </p>
            
            <Tabs 
              defaultValue="all" 
              className="w-full max-w-md mx-auto"
              onValueChange={setActiveCategory}
            >
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="bread">Breads</TabsTrigger>
                <TabsTrigger value="pastry">Pastries</TabsTrigger>
                <TabsTrigger value="cake">Cakes</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
