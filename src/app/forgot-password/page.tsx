"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for confirmation message

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending a reset link
    setMessage(`A reset link is being sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>

        {/* Form */}
        {!message ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter your email to reset password
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Reset Password
            </button>
          </form>
        ) : (
          /* Confirmation Message */
          <div className="text-center text-green-600 font-medium">
            {message}
          </div>
        )}

        {/* Back to Login */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
