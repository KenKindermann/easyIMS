import React from "react";

import "../../style/progressBar.css";
import { useNavigate } from "react-router-dom";

function ProgressBar({ steps, currentStep, setCurrentStep }) {
  const navigate = useNavigate();

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div className="step" key={index}>
          <span className={currentStep === step.label ? "active" : null} onClick={() => setCurrentStep(step.label)}>
            {step.label}
          </span>
          {index < steps.length - 1 && <div className="next"> ></div>}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
