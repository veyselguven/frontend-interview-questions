import { useState } from "react";

/* eslint-disable react/prop-types */
function CheckoutStepper({ stpesConfig = [] }) {
  const [currentStep, setCurrentStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);

  if (!stpesConfig.length) {
    return <></>;
  }

  const handleNext = () => {};

  return (
    <>
      <div className="stepper">
        {stpesConfig.map((step, index) => {
          return (
            <div
              key={index}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span> &#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name"> {step.name}</div>
            </div>
          );
        })}
      </div>
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stpesConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default CheckoutStepper;
