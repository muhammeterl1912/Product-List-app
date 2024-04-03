import HeaderStyles from "./Header.module.scss";
import { products, categories } from "../../helper/data";
import ProductList from "../products/ProductList";
import { useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

const Header = ({ categories, text }) => {
  const [show, showData] = useState(products);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleButton = (e) => {
    const filteredData1 = products.filter(
      (item) => item.category === categories[e]
    );
    showData(e === 0 ? products : filteredData1);
  };
  console.log("first")
  return (
    <div className={HeaderStyles.header}>
      <h1>{text} </h1>

      <div className={HeaderStyles.btns}>
        {categories.map((item, i) => (
          <button onClick={() => handleButton(i)}>{item}</button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search Product name.."
        className={HeaderStyles.input}
        onChange={handleChange}
      />
      <ProductList products={show} inputVal={inputVal} />
    </div>
  );
};

export default Header;
