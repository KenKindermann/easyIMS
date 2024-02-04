import "../../style/button.css";

const Button = ({ imgSrc, label }) => {
  return (
    <button>
      <img src={imgSrc} alt={label + "icon"} /> {label}
    </button>
  );
};

export default Button;
