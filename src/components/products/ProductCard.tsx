
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProductProps {
  id: string;
  title: string;
  image: string;
  category: string;
  location: string;
  distance: string;
  userRating: number;
  userName: string;
  userAvatar: string;
  isEco?: boolean;
}

const ProductCard = ({
  id,
  title,
  image,
  category,
  location,
  distance,
  userRating,
  userName,
  userAvatar,
  isEco = false,
}: ProductProps) => {
  return (
    <div className="group rounded-lg overflow-hidden border bg-white shadow-sm hover:shadow-md transition-all">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {isEco && (
          <Badge className="absolute bottom-2 left-2 bg-eco-green">Eco-friendly</Badge>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 line-clamp-1">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPinIcon className="w-4 h-4 mr-1 text-eco-terracota" />
          <span className="mr-2">{location}</span>
          <span className="text-xs text-gray-400">({distance})</span>
        </div>

        {/* User */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-2">
            <img 
              src={userAvatar} 
              alt={userName}
              className="w-7 h-7 rounded-full object-cover" 
            />
            <span className="text-sm font-medium">{userName}</span>
          </div>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-eco-terracota" />
            <span className="text-xs ml-1">{userRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon Components
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ProductCard;
