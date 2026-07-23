import React from "react";
import GraphContainer from "./GraphContainer";

import Graph1 from "../../../pictures/dashboard/graph1.png";
import Graph2 from "../../../pictures/dashboard/graph2.png";
import Graph3 from "../../../pictures/dashboard/graph3.png";
import Graph4 from "../../../pictures/dashboard/graph4.png";
import Advert5 from "../../../pictures/dashboard/advert1.png";

function DataGraph() {
  const datas = [
    {
      title: "Graph",
      image: Graph1,
    },
    {
      title: "Graph",
      image: Graph2,
    },
    {
      title: "Graph",
      image: Graph3,
    },
    {
      title: "Graph",
      image: Graph4,
    },
  ];
  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 lg:flex-row lg:flex-wrap">
      {datas.map((graph) => {
        return <GraphContainer title={graph.title} image={graph.image} />;
      })}
      {/* TABLE */}
      <div className="w-full p-1 lg:w-1/3">
        <div className="flex flex-col h-full rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-full p-2 bg-gray-400 border-gray-900 rounded-t-lg">
              <div className="font-bold text-gray-600 uppercase">Table</div>
            </div>
          </div>
          <div className="p-5">
            <table class="w-full p-5 text-gray-700">
              <thead>
                <tr>
                  <th class="text-left text-blue-900">Name</th>
                  <th class="text-left text-blue-900">Side</th>
                  <th class="text-left text-blue-900">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="">Obi Wan Kenobi</td>
                  <td class="">Light</td>
                  <td class="">Jedi</td>
                </tr>
                <tr>
                  <td class="">Greedo</td>
                  <td class="">South</td>
                  <td class=""> Scumbag</td>
                </tr>
                <tr>
                  <td class="">Darth Vader</td>
                  <td class="">Dark</td>
                  <td class="">Sith</td>
                </tr>
              </tbody>
            </table>
            <p class="py-2">See More issues...</p>
          </div>
        </div>
      </div>
      {/* ADVERT */}
      <div className="w-full p-1 lg:w-1/3">
        <div className="flex flex-col h-full rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-full p-2 bg-gray-100 border-b-2 border-gray-500 rounded-t-lg">
              <p class="font-bold text-gray-600 uppercase ">Advert</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-5">
              <img className="w-32 h-32" src={Advert5} alt="advert" />
            </div>
            <p className="text-center">
              Limited time offer: Get 10 free Adobe Stock images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataGraph;
