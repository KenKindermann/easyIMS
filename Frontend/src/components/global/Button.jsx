const Button = ({ imgSrc, label }) => {
  return (
    <button>
      <img src={imgSrc} alt={label + "icon"} />
    </button>
  );
};

export default Button;
