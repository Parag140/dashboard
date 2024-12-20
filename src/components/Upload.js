import React from "react";

const DocumentUploadSection = () => {
  const sections = [
    {
      title: "Statement",
      items: [
        {
          label: "Write your Statement Here",
          hint: "or Upload a Pdf",
          logo: "/path-to-icons/statement-logo.png", // Replace with appropriate path
        },
      ],
    },
    {
      title: "Agreement under Disputes",
      items: [
        {
          label: "Upload the Contract",
          hint: "Max 2MB, PDF",
          logo: "./images/upload-logo.png", // Replace with appropriate path
        },
        {
          label: "Arbitration Agreement",
          hint: "Max 2MB, PDF",
          logo: "./images/upload-logo.png", // Replace with appropriate path
        },
      ],
    },
    {
      title: "Additional Documentation",
      items: [
        {
          label: "Upload the Document",
          hint: "Max 2MB, PDF",
          logo: "/path-to-icons/additional-logo.png", // Replace with appropriate path
        },
      ],
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          {/* Section Title */}
          <div className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2 text-blue-500">📄</span> {section.title}
          </div>

          {/* Upload Boxes in a Row */}
          <div className="flex flex-row space-x-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex-1 border-dashed border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center text-center bg-gray-50 hover:bg-blue-50 transition"
              >
                {/* Upload Logo */}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="w-12 h-12 mb-4"
                  />
                )}

                {/* Upload Icon */}
                <div className="text-blue-500 text-4xl mb-3">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>

                {/* Label */}
                <p className="text-gray-700 font-medium">{item.label}</p>

                {/* Hint */}
                {item.hint && (
                  <p className="text-gray-500 text-sm mt-1">{item.hint}</p>
                )}
              </div>
            ))}

            {/* Add More Button for Additional Documentation */}
            {section.title === "Additional Documentation" && (
              <div className="flex items-center justify-center">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border-dashed border-2 border-blue-500 text-blue-500 text-2xl hover:bg-blue-100 transition">
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentUploadSection;
