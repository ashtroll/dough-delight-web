
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Utensils, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-cream-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Dough Delight</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For over 15 years, we've been baking with passion and serving our community with the finest breads, pastries, and cakes.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Dough Delight began in 2008 as a small family bakery with a simple mission: to create delicious, handcrafted baked goods using traditional methods and the finest ingredients.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Founded by master baker Thomas Richardson, we started with just three signature bread recipes in a tiny storefront. Word quickly spread about our exceptional sourdough, and we soon expanded our menu and space.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to be a beloved local institution, still family-owned and committed to the same values of quality, tradition, and community that have guided us from day one.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/bakery-story.jpg" 
                  alt="Our bakery story" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-[180px] hidden lg:block">
                  <p className="text-4xl font-bold text-bakery-500">15+</p>
                  <p className="text-gray-600">Years of Baking Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="bg-cream-50 section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Our Values</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              These core principles guide everything we do at Dough Delight.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-bakery-100 text-bakery-700 mb-4">
                  <Utensils className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Quality Ingredients</h3>
                <p className="text-muted-foreground text-sm">
                  We source the freshest, finest ingredients and never use preservatives or artificial flavors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-bakery-100 text-bakery-700 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Artisan Craftsmanship</h3>
                <p className="text-muted-foreground text-sm">
                  We honor traditional baking techniques and handcraft each item with care and precision.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-bakery-100 text-bakery-700 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground text-sm">
                  We're committed to our neighborhood and source locally whenever possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-bakery-100 text-bakery-700 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Fresh Daily</h3>
                <p className="text-muted-foreground text-sm">
                  We bake everything fresh daily, starting before dawn to ensure peak freshness.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team - Simplified for this version */}
        <section className="section-padding">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Meet Our Team</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              The passionate people behind your favorite baked goods.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/baker-1.jpg" 
                    alt="Thomas Richardson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Thomas Richardson</h3>
                  <p className="text-bakery-600 mb-2">Founder & Head Baker</p>
                  <p className="text-sm text-muted-foreground">
                    With over 30 years of baking experience, Thomas brings traditional techniques from around the world to our kitchen.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/baker-2.jpg" 
                    alt="Maria Lopez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Maria Lopez</h3>
                  <p className="text-bakery-600 mb-2">Pastry Chef</p>
                  <p className="text-sm text-muted-foreground">
                    A graduate of the prestigious Culinary Institute, Maria creates our exquisite pastries and desserts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/baker-3.jpg" 
                    alt="James Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">James Chen</h3>
                  <p className="text-bakery-600 mb-2">Artisan Bread Baker</p>
                  <p className="text-sm text-muted-foreground">
                    James specializes in sourdough and artisan breads, continuously perfecting his craft for the last decade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
