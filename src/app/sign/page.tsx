"use client";

import { useState } from "react";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signed in with ${signInData.email}`);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signed up with ${signUpData.email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6">
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            className={`px-6 py-2 font-bold rounded-full ${
              isSignIn
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            } transition duration-300`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`px-6 py-2 font-bold rounded-full ${
              !isSignIn
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            } transition duration-300`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        {isSignIn && (
          <form
            onSubmit={handleSignInSubmit}
            className="space-y-4 animate-fadeIn"
          >
            <h1 className="text-3xl font-extrabold text-center text-gray-800">
              Welcome Back!
            </h1>
            <p className="text-gray-600 text-center">
              Sign in to continue your journey
            </p>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={signInData.email}
                onChange={handleSignInChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Sign In
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {!isSignIn && (
          <form
            onSubmit={handleSignUpSubmit}
            className="space-y-4 animate-fadeIn"
          >
            <h1 className="text-3xl font-extrabold text-center text-gray-800">
              Join Us!
            </h1>
            <p className="text-gray-600 text-center">
              Create your account to get started
            </p>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
