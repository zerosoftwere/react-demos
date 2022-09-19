import style from "./Button.module.css";

const Button = ({ children, onClick, primary, type }) => {
  return (
    <button
      className={`${style.button} ${primary ? style.primary : style.default}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
