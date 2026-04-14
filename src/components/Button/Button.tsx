import "./styles.css";
import type { ButtonProps } from "./types.tsx";

function Button({ name, type = "button", onButtonClick}: ButtonProps) {

  return (
    <button className="my-button" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
