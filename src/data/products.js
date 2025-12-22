import laptop from "../assets/laptop.jpg";
import tshirt from "../assets/tshirt.jpg";
import book from "../assets/book.jpg";
import headphones from "../assets/headphones.jpg";
import shoes from "../assets/shoes.jpg";
import notebook from "../assets/notebook.jpg";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    category: "Electronics",
    inStock: true,
    image: laptop,
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 500,
    category: "Clothing",
    inStock: false,
    image: tshirt,
  },
  {
    id: 3,
    title: "Book",
    price: 300,
    category: "Books",
    inStock: true,
    image: book,
  },
  {
    id: 4,
    title: "Headphones",
    price: 1200,
    category: "Electronics",
    inStock: true,
    image: headphones,
  },
  {
    id: 5,
    title: "Shoes",
    price: 2200,
    category: "Clothing",
    inStock: false,
    image: shoes,
  },
  {
    id: 6,
    title: "Notebook",
    price: 150,
    category: "Books",
    inStock: true,
    image: notebook,
  },
];

export default products;
