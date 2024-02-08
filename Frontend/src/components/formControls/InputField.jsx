import { useContext, useEffect, useRef } from "react";
import "../../style/InputField.css";
import { TableContext } from "../../provider/TableContext";

const InputField = ({ placeholder, onChange, style, onKeyDown, key, defaultValue }) => {
  const { receivingData } = useContext(TableContext);
  const inputField = useRef();

  return (
    <input
      key={receivingData}
      ref={inputField}
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
