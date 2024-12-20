import React from "react";
import Sidebar from "./components/Sidebar";
import ClaimForm from "./components/ClaimForm";
import ProgressBar from "./components/ProgressBar";
import DocumentUploadSection from "./components/Upload";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="w-full bg-gray-100 p-4 shadow-md">
        <ProgressBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-row flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            {/* Claim Form */}
            <ClaimForm />

            {/* Document Upload Section */}
            <div className="mt-6">
              <DocumentUploadSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
