import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "./helper/data";
import "./App.scss";
function App() {
 
  return (
    <>
      <Header categories ={categories} text = "Products List" />
      <ProductList products = {products} />
    </>
  );
}

export default App;
