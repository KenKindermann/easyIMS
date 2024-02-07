import "../../style/InputField.css";

const InputField = ({ settings }) => {
  return <input type="text" placeholder={settings.placeholder} />;
};

export default InputField;
