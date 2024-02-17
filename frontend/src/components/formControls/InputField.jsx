import "../../style/InputField.css";

const InputField = ({ placeholder, onChange, style, onKeyDown, defaultValue }) => {
  return (
    <input
      type="text"
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
      autoFocus
      defaultValue={defaultValue}
    />
  );
};

export default InputField;
