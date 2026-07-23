import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import DailyDiscover from "./DailyDiscover";
import Flashdeal from "./Flashdeal";

import ShopeeMall from "./ShopeeMall";
import TopProducts from "./TopProducts";
import TrendingSearches from "./TrendingSearches";

function Body() {
  return (
    <div className="mt-6 mr-2 ">
      <div className="flex h-full ">
        <div className="w-2/3 mr-1">
          <img
            className="w-full h-full"
            alt="shopee"
            src="https://cf.shopee.ph/file/5ff2d67122902767b63071f97bd63f25_xxhdpi"
          />
        </div>
        <div className="flex flex-col w-1/3 ">
          <div className="flex-1">
            <img
              className=""
              alt="shopee"
              src="https://cf.shopee.ph/file/179a647c629d3e4089fd663db854564e_xhdpi&quot"
            />
          </div>
          <div className="flex-1 mt-1">
            <img
              src="https://cf.shopee.ph/file/62958b790cd49c4638b5c363e05413ce_xhdpi"
              alt="shopee"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-between p-4 text-sm text-center bg-white border-2 border-gray-100">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/3f7950b73f83d02f9e4e85dacdaff081_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Shopee Live</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/19a0e1075e50d350051abf39fbfd1da2_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Free Shipping</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/5f9662e33be6710f0f9c298af239263e_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Coins Rewards</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/b1591242645077781988fab2c9c173ff_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>ShopeePay</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/32deffd35c5e9aafcb8ea1368205d710_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>15% Cashback</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/cd9bc6084b2862a964b2faf6e2af6886_xxhdpi"
                alt="shopee"
              />
            </div>
            <div className="">
              <p>Shopee</p>
              <p>Milyonaryo</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/2cd7fb02ccaf6dbd485b762bcd98e658_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Shopee Mall</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/a7f1e6f7465f722ab5db4c537517a25d_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Games</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/6ce994b4b3cd21f0067a2afc94c9d160_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Shopee Farm</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img
                src="https://cf.shopee.ph/file/3f9c38c4851369e3d6de6d402b6c0c05_xxhdpi"
                alt="shopee"
              />
            </div>
            <div>
              <p>Shopee Mart</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-auto mt-6 bg-orange-700">
          <img
            src="https://cf.shopee.ph/file/cba296b07d3b3cdd95719cabc589eb16_xxhdpi"
            alt="shopee"
          />
        </div>
      </div>

      <div className="mt-4">
        <Categories />
      </div>

      <div className="mt-4">
        <Flashdeal />
      </div>
      <div className="mt-4 ">
        <Banner />
      </div>
      <div className="mt-4">
        <ShopeeMall />
      </div>
      <div className="mt-4">
        <TrendingSearches />
      </div>
      <div className="mt-4">
        <TopProducts />
      </div>
      <div className="mt-4">
        <DailyDiscover />
      </div>
    </div>
  );
}

export default Body;
