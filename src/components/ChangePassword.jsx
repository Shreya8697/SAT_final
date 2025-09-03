import React, { useState } from "react";

function ChangePassword({ onCancel }) {
  const [step, setStep] = useState(1); // 1=enter email, 2=verify OTP, 3=change password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    // Dummy OTP generator
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    console.log("Generated OTP (for demo):", otpCode);
    setMessage(`OTP sent to ${email} (check console for demo)`);
    setStep(2);
  };

const handleVerifyOtp = () => {
  if (otp === "12345") {
    setMessage("OTP verified successfully!");
    setStep(3);
  } else {
    setMessage("Invalid OTP. Try again.");
  }
};


  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    setMessage("Password updated successfully ✅");
    // API call here to update password in backend
    setTimeout(() => {
      onCancel(); // back to Profile page
    }, 1500);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h1 className="text-xl font-bold mb-4 text-center">Change Password</h1>

        {message && (
          <p className="text-sm text-center mb-4 text-blue-600">{message}</p>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border rounded-md px-3 py-2"
                placeholder="Enter your registered email"
              />
            </label>
            <button
              onClick={handleSendOtp}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Enter OTP</span>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full border rounded-md px-3 py-2"
                placeholder="Enter 6-digit OTP"
              />
            </label>
            <button
              onClick={handleVerifyOtp}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Verify OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">New Password</span>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full border rounded-md px-3 py-2"
                placeholder="Enter new password"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border rounded-md px-3 py-2"
                placeholder="Confirm new password"
              />
            </label>
            <button
              onClick={handleChangePassword}
              className="w-full px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
            >
              Update Password
            </button>
          </div>
        )}

        <button
          onClick={onCancel}
          className="mt-4 w-full px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
