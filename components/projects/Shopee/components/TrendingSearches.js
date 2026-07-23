import React from "react";

function TrendingSearches() {
  return (
    <div>
      <div className="flex p-4 bg-white border-b border-gray-300">
        <div className="w-1/2">TRENDING SEARCHES</div>
        <div className="flex justify-end w-1/2">CHANGE</div>
      </div>

      <div className="bg-white">
        <div className="flex">
          <div className="flex w-1/5">
            <div className="flex flex-col p-4">
              <div>Rubber Shoes</div>
              <div>41k+ products</div>
            </div>
            <div className="border-r border-gray-300 ">
              <img
                className="h-24"
                src="https://cf.shopee.ph/file/5c9c3cda2971f4418f2692df8cc6e362"
                alt="shopee"
              />
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex flex-col p-4">
              <div>Couple Ring</div>
              <div>21k+ products</div>
            </div>
            <div className="border-r border-gray-300 ">
              <img
                className="h-24"
                src="https://cf.shopee.ph/file/3a175bff0ec46b3e45e5195fcd0a6b5b"
                alt="shopee2"
              />
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex flex-col p-4">
              <div>Study Table</div>
              <div>18k+ products</div>
            </div>
            <div className="border-r border-gray-300 ">
              <img
                className="h-24"
                src="https://cf.shopee.ph/file/9113a75241b9a0fe5da0bac555ef0db6"
                alt="shopee3"
              />
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex flex-col p-4">
              <div>Skirt</div>
              <div>70k+ products</div>
            </div>
            <div className="border-r border-gray-300 ">
              <img
                className="h-24"
                src="https://cf.shopee.ph/file/f5499da7db1cef1fb68d0a2a4719aca3"
                alt="shopee4"
              />
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex flex-col p-4">
              <div>Seamless Pants</div>
              <div>59k+ products</div>
            </div>
            <div>
              <img
                className="h-24"
                src="https://cf.shopee.ph/file/e4af8291b66a17a1075e0ffabb5595c0"
                alt="shopee5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingSearches;
