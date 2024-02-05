import { useContext } from "react";
import { MyContext } from "../provider/changeContent";

const usePopup = () => {
  const { setShowPopup, setDarkBackground } = useContext(MyContext);

  const openPopup = () => {
    setShowPopup(false);
    setDarkBackground(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setDarkBackground(false);
  };

  return { openPopup, closePopup };
};

export default usePopup;
