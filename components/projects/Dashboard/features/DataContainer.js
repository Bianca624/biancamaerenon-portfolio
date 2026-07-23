import React from "react";

function DataContainer({ datas }) {
  return (
    <div className="">
      <div
        className={`bg-${datas.color}-100  border-b-4 rounded-md flex h-32 p-5 shadow-lg`}
      >
        <div className="flex items-center w-1/3 ">
          <div className={`bg-${datas.color}-500 h-16 w-16 rounded-full`}></div>
        </div>
        <div className="w-full text-center lg:w-1/3">
          <div className="font-bold text-gray-600 uppercase">{datas.title}</div>
          <div className="text-3xl font-bold">{datas.value}</div>
        </div>
      </div>
    </div>
  );
}

export default DataContainer;
