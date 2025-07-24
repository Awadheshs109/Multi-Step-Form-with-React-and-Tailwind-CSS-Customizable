
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import Accounts from "../components/Steps/Accounts";
import Details from "../components/Steps/Details";
import Final from "../components/Steps/Final";
import React, { useState } from "react";

const StepForm = () => {
  const steps = ["Account Information", "Personal Information", "Complete"];
  const [currentStep, setCurrentStep] = useState(1);
  const [showFinal, setShowFinal] = useState(false);

  const [accountData, setAccountData] = useState({ email: "", password: "" });
  const [detailsData, setDetailsData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Accounts formData={accountData} setFormData={setAccountData} />;
      case 2:
        return <Details formData={detailsData} setFormData={setDetailsData} />;
      case 3:
        return <Final />;
      default:
        return null;
    }
  };

  const validateStep = () => {
    if (currentStep === 1) {
      return accountData.email !== "" && accountData.password !== "";
    }
    if (currentStep === 2) {
      return detailsData.firstName !== "" && detailsData.lastName !== "";
    }
    return true;
  };

  const handleClick = (direction) => {
    if (direction === "next") {
      if (!validateStep()) {
        alert("Please fill all required fields.");
        return;
      }

      if (currentStep === steps.length) {
        // Log full form data on Finish
        console.log("📋 Submitted Form Data:");
        console.log({
          accountData,
          detailsData,
        });
        setShowFinal(true);

        return;
      }

      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="md:w-2/3 lg:w-1/2 bg-white shadow-2xl rounded-3xl px-8 py-10 transition-all">
        {showFinal ? (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 text-lg">
              You have successfully completed the form.
            </p>
          </div>
        ) : (
          <>
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="mt-12 mb-8">{displayStep(currentStep)}</div>
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default StepForm;
