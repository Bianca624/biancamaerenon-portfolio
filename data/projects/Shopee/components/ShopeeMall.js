import React from "react";

function ShopeeMall() {
  return (
    <div>
      <div className="flex p-4 bg-white border-b border-gray-300 border-opacity-50">
        <div className="flex w-3/4">
          <div className="pr-4 mr-2 font-bold text-orange-600 border-r-2 border-gray-500 border-opacity-50">
            SHOPEE MALL
          </div>
          <div className="mr-2">100% Authentic</div>
          <div className="mr-2">7-Day Returns</div>
          <div className="mr-2">Free Shipping & COD</div>
        </div>
        <div className="flex justify-end w-1/4 text-orange-600">
          <div className="">See All</div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap h-full bg-white ">
          <div className="object-contain w-1/4 ">
            <img
              className="h-full"
              src="https://cf.shopee.ph/file/6a97a91ba44974570308127ed24ec168"
              alt="shopee"
            />
          </div>

          <div className="flex flex-wrap justify-between w-3/4">
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>

            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
            <div className="w-1/4">
              <img
                src="https://cf.shopee.ph/file/63af5e2f06e628d67f53a819510ff696_xhdpi"
                alt="shopee"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopeeMall;
