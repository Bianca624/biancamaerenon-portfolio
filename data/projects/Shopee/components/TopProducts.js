import React from "react";

function TopProducts() {
  return (
    <div>
      <div className="flex p-4 bg-white">
        <div className="w-1/2">TOP PRODUCTS</div>
        <div className="flex justify-end w-1/2">See All ></div>
      </div>

      <div>
        <div className="flex">
          <div className="flex flex-col w-full p-4">
            <div className="flex w-full">
              <div className="w-full h-64">
                <img
                  className="w-full h-full "
                  src="https://cf.shopee.ph/file/cdaeae7b1297da5d2267752dd5b8f046_tn"
                  alt="woman"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full h-32 ">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/0dc7d833639b02e22e683ed112177f98_tn"
                    alt="damit"
                  />
                </div>
                <div className="w-full h-32 ">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/6b963e4695f65383ab781a9622f688a1_tn"
                    alt="damit2"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center ">SKIRT</div>
          </div>
          <div className="flex flex-col w-full p-4">
            <div className="flex w-full">
              <div className="w-full h-64 ">
                <img
                  className="w-full h-full "
                  src="https://cf.shopee.ph/file/66531bea158e863b61b885f2e8cf2a6a_tn"
                  alt="facemask"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full h-32 ">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/d74adceb3359bce304b69496c01f450a_tn"
                    alt="facemask1"
                  />
                </div>
                <div className="w-full h-32 ">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/ff55927fc31c8d014cd688fb80f1e0d3_tn"
                    alt="facemask2"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">MEDICAL MASK</div>
          </div>
          <div className="flex flex-col w-full p-4">
            <div className="flex w-full">
              <div className="w-full h-64 bg-gray-600">
                <img
                  className="w-full h-full "
                  src="https://cf.shopee.ph/file/5cbc4448beb25047e63869e4298226fe_tn"
                  alt="wallpaper1"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full h-32 bg-green-500">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/2f7867df7ceaa19a74871760f4696c1e_tn"
                    alt="wallpaper2"
                  />
                </div>
                <div className="w-full h-32 bg-yellow-500">
                  <img
                    className="w-full h-full "
                    src="https://cf.shopee.ph/file/ef432c9a598dbdc478f7a4870c4da647_tn"
                    alt="wallpaper3"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">Adhesive Wallpaper</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
