import React from "react";
import DataContainer from "./DataContainer";

function Data() {
  const datas = [
    {
      color: "green",
      title: "Total Revenue",
      value: "$3249",
      // bgcolor:"",
      // bordercolor:""
    },
    {
      color: "yellow",
      title: "Total User",
      value: "249",
    },
    {
      color: "yellow",
      title: "New Users",
      value: "2",
    },
    {
      color: "blue",
      title: "Server Uptime",
      value: "152 days",
    },
    {
      color: "green",
      title: "To do list",
      value: "7 tasks",
    },
    {
      color: "yellow",
      title: "Issues",
      value: "3",
    },
  ];
  return (
    <div className="grid h-full grid-cols-3 gap-4 p-4 bg-gray-100">
      {datas.map((data) => {
        return <DataContainer datas={data} />;
      })}
    </div>
  );
}

export default Data;
