import { button } from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={`${button}`}>{children}</button>;
};

export default Button;
