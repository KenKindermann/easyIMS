import "../../style/button.css";
import sortIcon from "../../assets/icons/sort_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";

const Sort = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Sort")}>
      <img src={sortIcon} alt={"sort icon"} /> Sort
    </button>
  );
};

export default Sort;
