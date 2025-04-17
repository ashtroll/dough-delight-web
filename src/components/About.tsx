
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/bakery-story.jpg" 
                alt="Our bakery story" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden lg:block">
              <p className="text-3xl font-bold text-bakery-500">15+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Bakery Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2008, Dough Delight began as a small family bakery with a passion for traditional recipes and quality ingredients. Our dedication to craftsmanship and flavor has made us a beloved local institution.
            </p>
            <p className="text-muted-foreground mb-6">
              Every day, our team of skilled bakers arrives before dawn to hand-craft each loaf, pastry, and dessert. We believe in doing things the old-fashioned way—with time, care, and the finest ingredients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-cream-50 rounded-lg text-center">
                <p className="font-bold text-xl text-bakery-700">100%</p>
                <p className="text-sm text-muted-foreground">Natural Ingredients</p>
              </div>
              <div className="p-4 bg-cream-50 rounded-lg text-center">
                <p className="font-bold text-xl text-bakery-700">50+</p>
                <p className="text-sm text-muted-foreground">Unique Products</p>
              </div>
              <div className="p-4 bg-cream-50 rounded-lg text-center">
                <p className="font-bold text-xl text-bakery-700">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
