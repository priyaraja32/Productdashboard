

import { useState } from "react";
import productsData from "./data/products";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";

const ProductApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          {selectedCategory} Products
        </h2>

        <ProductList products={filteredProducts} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductApp;




