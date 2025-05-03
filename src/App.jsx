// App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">

      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-amber-50 p-6 md:p-12">
        <div className="max-w-md w-full space-y-6">

          {/* Logo + Title */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img
                src="\dog.svg"
                alt="Pet"
                className="w-[50px] h-[60px] md:w-[60px] md:h-[70px]"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Marshee</h1>
            <p className="text-lg md:text-xl font-semibold mt-2">Welcome Back</p>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Log in to access your pet service dashboard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="********"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              />
              <div className="flex justify-between items-center mt-1 text-sm">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-orange-500 hover:underline text-xs md:text-sm">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition text-sm md:text-base"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-xs md:text-sm">Or download our apps</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="flex items-center justify-center w-full sm:w-1/2 border py-2 rounded hover:bg-gray-100 text-sm md:text-base">
              <span className="mr-1">📱</span> Mobile App
            </button>
            <button className="flex items-center justify-center w-full sm:w-1/2 border py-2 rounded hover:bg-gray-100 text-sm md:text-base">
              <span className="mr-1">💻</span> Desktop App
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-400 md:text-xs">
            Marshee pet service. All rights reserved
          </p>
        </div>
      </div>

      {/* Right: Image and Text */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-amber-100 relative p-6">
        <div className="text-center max-w-sm px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">
            Grow your pet service business
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Manage appointments, team members, and service all in one place
          </p>
        </div>
        <img
          src="\file.png"
          alt="Pet"
          className="absolute bottom-0 w-full h-[250px] md:h-[370px] object-contain"
        />
      </div>
    </div>
  );
}

export default App;
