import React from "react";
import Navbar from "../../../Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Footer3 from "../components/Footer3";
import Nav from "../components/Nav";

function ShopeePage() {
  return (
    <div>
      <Navbar />
      <div className="absolute bg-gray-100">
        <div className="px-12">
          <h2 className="p-4 text-lg text-center">
            Shopee Sample Website (Desktop View Only)
          </h2>
          <div className="bg-orange-600 ">
            <div className="lg:max-w-screen-xl lg:mx-auto">
              <Nav />
            </div>
          </div>
          <div className="">
            <Body />
          </div>
          <div className="mt-4">
            <hr class="border-2 border-orange-600 bg-orange-600" />
          </div>
          <div className="">
            <Footer />
          </div>
          <div className="">
            <div className="px-6">
              <Footer3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopeePage;
