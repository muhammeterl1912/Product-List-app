import ProductCard from "./ProductCard";
import "./Products.scss";
const ProductList = ({ products,inputVal }) => {
console.log(inputVal)
console.log(products)
const filteredData = products.filter((item) => item.title.toLowerCase().includes(inputVal.trim().toLowerCase()) )
  return (
    <div className="products-list">
  
      {
      filteredData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      { 
        !filteredData.length  && (
          <div>
            <h1> Product not found...</h1>
          </div>
        ) 
      }
    </div>
  );
};
export default ProductList;
