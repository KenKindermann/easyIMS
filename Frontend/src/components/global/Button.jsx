import "../../style/button.css";
import usePopup from "../../hooks/usePopup";

const Button = ({ imgSrc, label }) => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup(label)}>
      <img src={imgSrc} alt={label + "icon"} /> {label}
    </button>
  );
};

export default Button;
