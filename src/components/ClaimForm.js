import React from "react";

const ClaimForm = () => {
  return (
    <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        File your Claim. <span className="text-sm text-gray-500">(Approx 5 Minutes)</span>
      </h2>

      {/* Form Sections */}
      <div className="grid grid-cols-3 gap-6">
        {/* Claim Value */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Claim Value</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Contract Value</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="10,00,00 USD"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Claim Value</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="15,00,00 USD"
              />
              <p className="text-xs text-orange-500 mt-1">150% of Contract Value</p>
            </div>
          </div>
        </div>

        {/* Place */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Place</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Place</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option>Select the Place for proceedings</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Is the place for the proceedings mentioned in the agreement?</span>
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-1">
                  <input type="radio" name="place" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="place" />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Language */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Language</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Language</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option>Select the language for proceedings</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Is the language mentioned in the agreement?</span>
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-1">
                  <input type="radio" name="language" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="language" />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statement and Upload Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Statement */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Statement</h3>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows="5"
            placeholder="Write your statement here..."
          ></textarea>
        </div>

        {/* Agreement under Disputes */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Agreement under Disputes</h3>
          <div className="space-y-4">
            <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center text-gray-500">
              Upload the Contract (Max 2MB, PDF)
            </div>
            <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center text-gray-500">
              Arbitration Agreement (Max 2MB, PDF)
            </div>
          </div>
        </div>

        {/* Additional Documentation */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Additional Documentation</h3>
          <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center text-gray-500">
            Upload the Document (Max 2MB, PDF)
          </div>
          <button className="w-full mt-2 p-2 bg-blue-600 text-white rounded-md">
            + Add More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
