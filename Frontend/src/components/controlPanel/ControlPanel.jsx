import "../../style/controlPanel.css";

const ControlPanel = ({ controls }) => {
  return <section className="control-panel">{controls.map((button) => button)}</section>;
};

export default ControlPanel;
