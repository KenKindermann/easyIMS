import "../../style/controlPanel.css";

const ControlPanel = ({ buttons }) => {
  return <section className="control-panel">{buttons.map((button) => button)}</section>;
};

export default ControlPanel;
