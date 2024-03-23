import headerStyle from "./Header.module.scss";

const Header = ({ categories, text }) => {
  return (
    <div className={headerStyle.header}>
      <h1>{text}</h1>
      <div className={headerStyle.btns}>
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
