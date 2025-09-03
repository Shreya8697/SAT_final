import React from "react";

function Edit({ onCancel }) {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              defaultValue="John Doe"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="text"
              defaultValue="+91 9876543210"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </label>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
