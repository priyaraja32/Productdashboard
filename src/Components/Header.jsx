import { ShoppingCart } from "lucide-react";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <header className="bg-blue-600 text-white p-6 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0 flex items-center gap-2">
        <ShoppingCart size={32} className="text-white" />
        Product Dashboard
      </h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="text-black px-4 py-2 rounded-lg focus:outline-none"
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>
    </header>
  );
};

export default Header;




