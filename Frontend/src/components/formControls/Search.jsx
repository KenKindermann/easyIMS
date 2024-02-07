import "../../style/button.css";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";

const Search = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Search")}>
      <img src={searchIcon} alt={"search icon"} /> Search
    </button>
  );
};

export default Search;
