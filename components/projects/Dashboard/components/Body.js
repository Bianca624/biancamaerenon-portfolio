import React from "react";
import Data from "../features/Data";
import DataGraph from "../features/DataGraph";

function Body() {
  return (
    <div className="w-full bg-teal-500">
      <div className="h-12 p-2 text-xl text-white bg-blue-800 shadow">
        <p className="pl-2 font-bold">Analytics</p>
      </div>
      <div className="">
        <Data />
      </div>
      <div className="">
        <DataGraph />
      </div>
    </div>
  );
}

export default Body;
