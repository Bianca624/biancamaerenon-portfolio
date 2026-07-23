import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className="w-full p-4 bg-gray-800 lg:p-0 lg:h-16">
      <div className="flex justify-between h-full">
        {/* SMiley */}
        <div className="flex items-center w-full lg:w-64">
          <span className="text-4xl">&#128512;</span>
        </div>

        <button onClick={openToggle} className="focus:outline-none sm:hidden">
          <svg
            className="w-8 h-8 text-white fill-current hover:text-gray-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Search */}
        <div className="flex items-center lg:w-56 ">
          <div className="hidden lg:block">
            <input
              className="w-full h-10 px-2 py-1 pl-10 text-white bg-gray-800 rounded focus:border-gray-700"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>
        {/* other links */}

        <div className="flex items-center">
          <div className="hidden lg:block">
            <ul className="flex lg:px-6 lg:py-6">
              <li className="mx-2 text-gray-100 hover:text-blue-400">Active</li>
              <li className="mx-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline">
                link
              </li>
              <li className="mx-2 text-gray-100 hover:text-blue-400">
                &#129409; Hi, User
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          open ? "flex flex-col md:hidden px-2 text-white text-lg" : "hidden"
        }
      >
        {/* Search */}
        <div className="flex items-center lg:w-56 ">
          <input
            className="w-full h-10 px-2 py-1 pl-2 text-white bg-gray-800 rounded lg:pl-10 focus:border-gray-700"
            type="search"
            placeholder="Search..."
          />
        </div>
        {/* other links */}

        <ul className="lg:px-6 lg:py-6">
          <li className="mx-2 text-gray-100 hover:text-blue-400">Active</li>
          <li className="mx-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline">
            link
          </li>
          <li className="mx-2 text-gray-100 hover:text-blue-400">
            &#129409; Hi, User
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
