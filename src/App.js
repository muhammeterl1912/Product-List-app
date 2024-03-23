import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "./helper/data";
function App() {
 
  return (
    <>
      <Header categories ={categories} text = "Product List" />
      <ProductList products = {products} />
    </>
  );
}

export default App;
