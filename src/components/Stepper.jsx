import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newSteps, setNewSteps] = useState([]);
  const stepRef = useRef();

  // This function updates step status based on the current step
  const updateSteps = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          selected: false,
          highlight: false,
          completed: false,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlight: false,
          selected: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlight: false,
          selected: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  // Initialize steps on mount and when props change
  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlight: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updateSteps(currentStep - 1, stepRef.current);
    setNewSteps(current);
  }, [steps, currentStep]);

  // Renders steps with connecting lines in between (except after last step)
  const displayStep = newSteps.map((step, index) => (
    <React.Fragment key={index}>
      <div className="relative flex flex-col items-center text-teal-600">
        {/* Circle Step Number */}
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 py-3 flex items-center justify-center ${
            step.completed
              ? "bg-green-600 text-white font-bold border border-green-600"
              : "border-green-300"
          }`}
        >
          { step.completed ? ( <span className="font-bold text-white text-xl ">&#10003;</span> ) :
          index + 1}  
        </div>

        {/* Step Description */}
        <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
          step.highlight ? "text-green-600" : "text-gray-500"}`}>
          {step.description}
        </div>
      </div>

      {/* Line Between Steps */}
      {index !== newSteps.length - 1 && (
        <div className={`flex-auto mx-1 transition duration-500 ease-in-out ${step.completed ? "border-green-600  border-t-4": "border-gray-500  border-t-2" } `}></div>
      )}
    </React.Fragment>
  ));

  return <div className="flex items-center w-full px-4">{displayStep}</div>;
};

export default Stepper;
