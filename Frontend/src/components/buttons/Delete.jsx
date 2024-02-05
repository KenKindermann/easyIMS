import "../../style/button.css";
import deleteIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";

const Delete = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Delete")}>
      <img src={deleteIcon} alt={"delete icon"} /> Delete
    </button>
  );
};

export default Delete;
