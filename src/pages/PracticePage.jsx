import React, { useState } from "react";

function PracticePage() {
  const [activeTab, setActiveTab] = useState("math");
  const [questionCount, setQuestionCount] = useState(5);
  const [practiceMode, setPracticeMode] = useState("tutor");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 w-full max-w-3xl">
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === "rw"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("rw")}
        >
          Reading and Writing
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === "math"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("math")}
        >
          Math
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-3xl bg-white shadow rounded-lg mt-6 p-6">
        {/* Quick Section */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            Quick <span className="ml-2 text-sm text-gray-400">ⓘ</span>
          </h3>
          <div className="flex items-center mt-3 gap-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Start Practice
            </button>
            <input
              type="number"
              className="w-16 border rounded-md px-2 py-1 text-center"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
            />
            <span className="text-gray-500 text-sm">
              Max Questions <span className="ml-1 font-semibold">18</span>
            </span>
          </div>
        </div>

        {/* Personalize Section */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            Personalize <span className="ml-2 text-sm text-gray-400">ⓘ</span>
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            (Feature coming soon...)
          </p>
        </div>

        {/* Practice Mode */}
        <div>
          <h3 className="text-lg font-semibold flex items-center">
            Practice Mode <span className="ml-2 text-sm text-gray-400">ⓘ</span>
          </h3>
          <div className="flex items-center gap-6 mt-3">
            <button
              className={`px-4 py-2 rounded-md ${
                practiceMode === "tutor"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPracticeMode("tutor")}
            >
              Tutor
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                practiceMode === "timed"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPracticeMode("timed")}
            >
              Timed
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-400">
        Copyright © YourApp. All rights reserved.
      </footer>
    </div>
  );
}

export default PracticePage;
