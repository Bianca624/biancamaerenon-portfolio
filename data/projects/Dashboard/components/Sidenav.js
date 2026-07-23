import React from "react";

function Sidenav() {
  return (
    <div className="hidden w-48 h-full text-sm font-hairline bg-gray-800 lg:block">
      <div className="flex justify-start">
        <div className="p-1">
          <p className="p-1 text-white border-b-2 border-gray-800 ">&#9776;</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">&#9745;</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">&#9736;</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">&#8369;</p>
        </div>
        <div className="p-1">
          <p className="p-1 text-white border-b-2 border-gray-800 ">Task</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">Messages</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">Analytic</p>
          <p className="p-1 text-white border-b-2 border-gray-800 ">Payments</p>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
