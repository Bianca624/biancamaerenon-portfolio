import React from "react";
import Navbar from "../../../Navbar";
import Bgside from "../../../pictures/bg.jpg";
import Login from "../components/Login";
import Logo from "../components/Logo";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <h2 className="p-4 text-lg text-center">
        Login and Register Sample Website
      </h2>
      <div className="flex flex-col items-center justify-center flex-1 h-screen bg-gray-100 lg:flex-row">
        <div className="w-full bg-gray-100 lg:w-1/2">
          <div className="pt-12 pl-12">
            <Logo />
          </div>
          <div class="lg:px-32 px-4">
            <Login />
          </div>
        </div>

        <div class="lg:w-1/2 w-full hidden lg:block">
          <div className="object-cover">
            <img className="w-screen h-screen" src={Bgside} alt="bg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
