import React from "react";
const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back button */}
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentStep === 1}
      >
        Back
      </button>

      {/* Next/Finish button */}
      <button
        onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;


