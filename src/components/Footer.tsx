
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bakery-800">Dough Delight</h3>
            <p className="text-muted-foreground mb-4">
              Handcrafted artisan breads, pastries, and desserts made fresh daily with quality ingredients and love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bakery-700 hover:text-bakery-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-bakery-700 hover:text-bakery-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-bakery-700 hover:text-bakery-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bakery-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-bakery-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-bakery-500 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-bakery-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-bakery-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-bakery-500 transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bakery-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-bakery-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">123 Bakery Street, Flour City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-bakery-600" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-bakery-600" />
                <span className="text-muted-foreground">info@doughdelight.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bakery-800">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-bakery-600" />
                <div>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="font-medium">7:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-bakery-600" />
                <div>
                  <p className="text-muted-foreground">Saturday</p>
                  <p className="font-medium">8:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-bakery-600" />
                <div>
                  <p className="text-muted-foreground">Sunday</p>
                  <p className="font-medium">8:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-cream-200 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dough Delight Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
