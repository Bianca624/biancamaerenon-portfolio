import React from "react";

function GraphContainer({ title, image }) {
  return (
    <div className="w-full p-1 lg:w-1/3">
      <div className="flex flex-col h-full rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-full p-2 bg-gray-400 rounded-t-lg">
            <p class="font-bold text-gray-600 uppercase ">{title}</p>
          </div>
        </div>
        <div className="">
          <div className="flex p-5">
            <img className="w-full h-48" src={image} alt="hello" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphContainer;
