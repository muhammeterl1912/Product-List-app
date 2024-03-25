import HeaderStyles from "./Header.module.scss";
import { products, categories } from "../../helper/data";
import ProductList from "../products/ProductList";
import { useState } from "react";

const Header = ({ categories, text }) => {
  const [show, showData] = useState(products);
  const handleButton = (e) => {
    const filteredData1 = products.filter(
      (item) => item.category === categories[e]
    );
    showData(e === 0 ? products : filteredData1);
  };

  return (
    <div className={HeaderStyles.header}>
      <h1>{text} </h1>
      <div className={HeaderStyles.btns}>
        {categories.map((item, i) => (
          <button onClick={() => handleButton(i)}>{item}</button>
        ))}
      </div>
      <ProductList products={show} />
    </div>
  );
};

export default Header;
