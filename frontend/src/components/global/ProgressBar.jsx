// CSS
import "../../style/progressBar.css";

function ProgressBar({ steps, currentStep }) {
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div className="step" key={index}>
          <span className={currentStep === step.label ? "active" : null} onClick={step.onClick}>
            {step.label}
          </span>
          {index < steps.length - 1 && <div className="next"> {">"} </div>}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
