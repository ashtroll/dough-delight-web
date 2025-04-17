
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  "/hero-bread-1.jpg",
  "/hero-pastry-2.jpg",
  "/hero-cake-3.jpg"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${heroImages[currentImage]})`,
          opacity: 0.9
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in">
            Freshly Baked <span className="text-cream-100">Every Day</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-cream-50 fade-in delay-1">
            Handcrafted artisan breads, pastries, and desserts made with love and the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4 fade-in delay-2">
            <Link 
              to="/products" 
              className="btn-primary flex items-center gap-2 bg-bakery-500 hover:bg-bakery-600"
            >
              Explore Our Menu <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button 
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentImage === index ? "w-8 bg-white" : "w-2 bg-white/60"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
