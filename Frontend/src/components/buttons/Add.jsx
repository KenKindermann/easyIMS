import "../../style/button.css";
import addIcon from "../../assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";

const Add = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Add")}>
      <img src={addIcon} alt={"add icon"} /> Add
    </button>
  );
};

export default Add;
