import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="pt-16">
          <p className="text-3xl text-center">Welcome.</p>
        </div>
        <div class="pt-8">
          <p className="text-lg">Email</p>
        </div>
        <div>
          <input
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="your@email.com"
          />
        </div>
        <div className="pt-4">
          <p className="text-lg">Password</p>
        </div>
        <div>
          <input
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mt-8 bg-black">
          <button className="p-2 text-lg font-semibold text-white hover:bg-gray-700">
            Login
          </button>
        </div>
        <div className="pt-12 pb-12 text-center">
          <p className="">
            Don't have an account? <Link to="/register">Register here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
