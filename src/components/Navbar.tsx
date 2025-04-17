import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/10 backdrop-blur-md rounded-full shadow-lg px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-bakery-800">
              <span className="font-black">Dough</span> Delight
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/about" className="font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-bakery-500 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-bakery-500 hover:bg-bakery-600">Order Now</Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-bakery-500 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md rounded-2xl shadow-lg mt-2 overflow-hidden">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="px-4 py-2 hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-bakery-500 hover:bg-bakery-600 mt-2">Order Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
