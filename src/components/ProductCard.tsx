
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-bakery-500 text-white text-xs font-bold px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-bakery-800">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            variant="outline" 
            className="rounded-full h-9 w-9 p-0 flex items-center justify-center border-bakery-200 hover:bg-bakery-50 hover:border-bakery-300"
          >
            <ShoppingBag size={16} />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
