
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const featuredProducts = [
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
    name: "Croissant",
    description: "Flaky, buttery croissants made from scratch daily.",
    price: 3.95,
    image: "/croissant.jpg",
    category: "pastry"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache frosting and chocolate shavings.",
    price: 28.95,
    image: "/chocolate-cake.jpg",
    category: "cake"
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    description: "Soft rolls with cinnamon sugar swirl and cream cheese frosting.",
    price: 4.50,
    image: "/cinnamon-roll.jpg",
    category: "pastry"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Treats</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most-loved creations, baked fresh daily using traditional methods and the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-bakery-700 font-medium hover:text-bakery-500 transition-colors"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
