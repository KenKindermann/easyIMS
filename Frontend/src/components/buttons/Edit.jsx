import "../../style/button.css";
import editIcon from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";

const Search = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Edit")}>
      <img src={editIcon} alt={"edit icon"} /> Edit
    </button>
  );
};

export default Search;
