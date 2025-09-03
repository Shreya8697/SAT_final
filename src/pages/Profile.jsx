import React, { useState } from "react";
import Edit from "../components/Edit";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <Edit onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">SAT Student</p>
            <p className="text-sm text-gray-400">Joined: Jan 2025</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Personal Info
            </h2>
            <p><span className="font-medium">Email:</span> johndoe@example.com</p>
            <p><span className="font-medium">Phone:</span> +91 9876543210</p>
            <p><span className="font-medium">Location:</span> Mumbai, India</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Academic Info
            </h2>
            <p><span className="font-medium">Current Course:</span> SAT Preparation</p>
            <p><span className="font-medium">Progress:</span> 45%</p>
            <p><span className="font-medium">Target Score:</span> 1500+</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 w-full sm:w-auto"
          >
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
