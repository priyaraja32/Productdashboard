
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const displayedProducts = products.slice(0, 16); // 4x4 grid

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-sm">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;









