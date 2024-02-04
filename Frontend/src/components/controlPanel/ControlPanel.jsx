import addIcon from "../../assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg";
import editIcon from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import deleteIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import sortIcon from "../../assets/icons/sort_FILL0_wght400_GRAD0_opsz24.svg";
import Button from "../global/Button";
import "../../style/controlPanel.css";

const ControlPanel = () => {
  return (
    <section className="control-panel">
      <Button label={"Add"} imgSrc={addIcon} />
      <Button label={"Edit"} imgSrc={editIcon} />
      <Button label={"Delete"} imgSrc={deleteIcon} />
      <Button label={"Search"} imgSrc={searchIcon} />
      <Button label={"Sort"} imgSrc={sortIcon} />
    </section>
  );
};

export default ControlPanel;
