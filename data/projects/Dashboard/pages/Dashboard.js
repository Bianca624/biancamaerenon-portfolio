import React from "react";
import Navbar from "../../../Navbar";
import Body from "../components/Body";
import Nav from "../components/Nav";
import Sidenav from "../components/Sidenav";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
        <h2 className="p-4 mt-24 text-lg text-center">
          Dashboard Sample Website
        </h2>
        <Nav />
      </div>

      <div className="flex flex-1">
        <Sidenav />
        <Body />
      </div>
    </div>
  );
}

export default Dashboard;
