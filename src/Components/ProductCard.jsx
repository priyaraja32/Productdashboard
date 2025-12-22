
import { Check, X, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col w-full">

      {/* Image */}
      <div className="h-32 w-full bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-2 flex flex-col flex-grow">
        <h2 className="text-xs font-semibold text-gray-800 truncate">
          {product.title}
        </h2>

        <p className="text-xs text-gray-600">₹{product.price}</p>

        {product.price > 1000 && (
          <span className="inline-flex items-center mt-1 bg-yellow-200 text-yellow-800 text-[10px] px-1 rounded w-fit gap-1">
            <Star className="w-3 h-3" />
            Premium
          </span>
        )}

        <div className="mt-auto pt-1">
          {product.inStock ? (
            <span className="inline-flex items-center text-green-600 text-[11px] gap-1">
              <Check className="w-3 h-3" />
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center text-red-600 text-[11px] gap-1">
              <X className="w-3 h-3" />
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;







