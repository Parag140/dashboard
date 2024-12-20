import React from "react";
import startPhoto from './images/start-photo.png';

const Sidebar = () => {
  const steps = [
    { id: 1, title: "Preliminary", status: "completed" },
    { id: 2, title: "Your Details", status: "completed" },
    { id: 3, title: "KYC", status: "completed" },
    { id: 4, title: "Parties", status: "active", time: "Approx 5 Min" },
    { id: 5, title: "Claim", status: "upcoming", time: "Approx 5 Min" },
    { id: 6, title: "Review", status: "upcoming", time: "Approx 5 Min" },
    { id: 7, title: "Payment", status: "upcoming", time: "Approx 5 Min" },
  ];

  return (
    <div className="w-full flex items-center px-8 py-4 bg-gray-50 rounded-lg shadow-lg">
      {/* Logo/Photo */}
      <div className="flex items-center">
        <img
          src={startPhoto}
          alt="Start Photo"
          className="h-16 w-auto object-cover mr-8"
        />
      </div>

      {/* Progress Bar */}
      <div className="flex items-center w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm ${
                  step.status === "completed"
                    ? "bg-blue-600 text-white"
                    : step.status === "active"
                    ? "border-4 border-blue-600 text-blue-600 bg-white"
                    : "border-4 border-gray-300 text-gray-400 bg-white"
                }`}
              >
                {step.status === "completed" ? (
                  <span>&#10003;</span> // Checkmark for completed steps
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              {/* Step Label */}
              <span
                className={`text-xs mt-2 ${
                  step.status === "completed" || step.status === "active"
                    ? "text-gray-800 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
              {/* Time (only for active and upcoming steps) */}
              {step.time && step.status !== "completed" && (
                <span className="text-xs text-gray-400">{step.time}</span>
              )}
            </div>

            {/* Connecting Line */}
            {index !== steps.length - 1 && (
              <div
                className={`h-[2px] w-16 ${
                  step.status === "completed"
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
