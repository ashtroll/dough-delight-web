
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Regular Customer",
    quote: "Their sourdough bread is simply the best in the city. I come here every weekend to stock up for the week!",
    image: "/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    quote: "The pastries here are exceptional. You can taste the quality ingredients and craftsmanship in every bite.",
    image: "/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Local Resident",
    quote: "I ordered a birthday cake from Dough Delight and it was not only beautiful but incredibly delicious. Everyone loved it!",
    image: "/testimonial-3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "James Peterson",
    role: "Coffee Enthusiast",
    quote: "The perfect place to enjoy a morning coffee with their amazing croissants. The atmosphere is always warm and welcoming.",
    image: "/testimonial-4.jpg", 
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(testimonials.length - 2, 0);
      }
      return prevIndex - 1;
    });
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= testimonials.length - 2) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Determine how many testimonials to show based on screen size
  // For simplicity, we'll handle this with CSS grid instead of JS

  return (
    <section className="section-padding bg-cream-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their Dough Delight experience.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-10 w-10 rounded-full bg-white"
              onClick={showPrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-10 w-10 rounded-full bg-white"
              onClick={showNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
