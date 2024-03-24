import HeaderStyles from "./Header.module.scss";
import { products, categories } from "../../helper/data";
import ProductList from "../products/ProductList";
import { useState } from "react";

const Header = ({ categories, text }) => {
  const [show, showData] = useState(products);

  const filteredData1 = products.filter(
    (item) => item.category === categories[1]
  );
  const filteredData2 = products.filter(
    (item) => item.category === categories[2]
  );
  const filteredData3 = products.filter(
    (item) => item.category === categories[3]
  );
  const filteredData4 = products.filter(
    (item) => item.category === categories[4]
  );

  return (
    <div className={HeaderStyles.header}>
      <h1>{text} </h1>
      <div className={HeaderStyles.btns}>
        <button onClick={() => showData(products)}>{categories[0]}</button>
        <button onClick={() => showData(filteredData1)}>{categories[1]}</button>
        <button onClick={() => showData(filteredData2)}>{categories[2]}</button>
        <button onClick={() => showData(filteredData3)}>{categories[3]}</button>
        <button onClick={() => showData(filteredData4)}>{categories[4]}</button>
      </div>
      <ProductList products={show} />
    </div>
  );
};

export default Header;
