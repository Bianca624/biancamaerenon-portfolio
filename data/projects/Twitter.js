import React from "react";
import Loupe from "../pictures/hackreactor/loupe.png";
import Users from "../pictures/hackreactor/users.png";
import Convo from "../pictures/hackreactor/convo.png";
import Tweet from "../pictures/hackreactor/tweet.png";
import Navbar from "../Navbar";

function Twitter() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-screen">
        <h2 className="p-4 mt-20 text-lg text-center">
          Twitter Sample Website
        </h2>
        <div className="flex flex-col-reverse flex-1 lg:flex-row">
          <div className="flex items-center justify-center w-full bg-blue-400 lg:w-1/2">
            <div>
              <div className="flex items-center m-10">
                <div className="">
                  <img
                    className="w-5 h-5 object-content"
                    src={Loupe}
                    alt="loupe"
                  />
                </div>
                <div className="ml-4 text-lg font-bold text-white">
                  Follow your interests.
                </div>
              </div>
              <div className="flex items-center m-10">
                <div className="">
                  <img
                    className="w-5 h-5 object-content"
                    src={Users}
                    alt="users"
                  />
                </div>
                <div className="ml-4 text-lg font-bold text-white">
                  Hear what people are talking about.
                </div>
              </div>
              <div className="flex items-center m-10">
                <div className="">
                  <img
                    className="w-5 h-5 object-content"
                    src={Convo}
                    alt="convo"
                  />
                </div>
                <div className="ml-4 text-lg font-bold text-white">
                  Join the conversation.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full lg:w-1/2">
            <div className="hidden lg:block">
              <div className="flex items-center justify-center h-20 mt-3 ">
                <div className="flex flex-col">
                  <div className="flex ">
                    <div className="flex flex-col px-2 mx-2 bg-gray-100 border-b border-black">
                      <label className="text-gray-600">
                        Phone, email, or username
                      </label>
                      <input className="bg-gray-100" />
                    </div>

                    <div className="flex flex-col px-2 mx-2 bg-gray-100 border-b border-black">
                      <label className="text-gray-600">Password </label>
                      <input className="bg-gray-100" />
                    </div>
                    <div className="">
                      <button className="w-full px-4 py-2 font-semibold text-blue-400 bg-white border border-blue-400 rounded-full">
                        Login
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center ml-20 text-sm text-blue-500">
                    Forgot password?
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- whats happening --> */}

            <div className="">
              <div className="flex justify-center flex-1">
                <div className="p-10 lg:max-w-md">
                  <div className="my-10">
                    <img
                      className="w-10 h-7 object-content"
                      src={Tweet}
                      alt="tweet"
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">
                      See what’s happening in the world right now
                    </p>
                  </div>
                  <div className="my-10">
                    <p className="font-bold">Join Twitter today.</p>
                    <div className="my-4">
                      <button className="w-full px-4 py-2 font-semibold text-gray-100 bg-blue-400 border border-blue-400 rounded-full">
                        Sign up
                      </button>
                    </div>
                    <div className="my-4">
                      <button className="w-full px-4 py-2 font-semibold text-blue-400 bg-white border border-blue-400 rounded-full">
                        Log in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <div className="p-4 lg:px-6 lg:py-3">
            <div className="lg:justify-center lg:flex">
              <div className="flex justify-between p-2 lg:p-0">
                <p className="px-2 text-sm text-gray-600">About</p>
                <p className="pr-2 text-sm text-gray-600">Help Center</p>
                <p className="pr-2 text-sm text-gray-600">Terms of Service</p>
                <p className="pr-2 text-sm text-gray-600">Privacy</p>
              </div>
              <div className="flex justify-between p-2 lg:p-0">
                <p className="pr-2 text-sm text-gray-600">Cookie Policy</p>
                <p className="pr-2 text-sm text-gray-600">Ads info</p>
                <p className="pr-2 text-sm text-gray-600">Blog</p>
                <p className="pr-2 text-sm text-gray-600">Status</p>
                <p className="pr-2 text-sm text-gray-600">Careers</p>
              </div>
              <div className="flex justify-between p-2 lg:p-0">
                <p className="pr-2 text-sm text-gray-600">Brand Resources</p>
                <p className="pr-2 text-sm text-gray-600">Advertising</p>
                <p className="pr-2 text-sm text-gray-600">Marketing</p>
              </div>
              <div className="flex justify-between p-2 lg:p-0">
                <p className="pr-2 text-sm text-gray-600">
                  Twitter for Business
                </p>
                <p className="pr-2 text-sm text-gray-600">Developers</p>
                <p className="pr-2 text-sm text-gray-600">Directory</p>
                <p className="pr-2 text-sm text-gray-600">Settings</p>
              </div>
              <div className="flex justify-center p-2 lg:p-0">
                <p className="pr-2 text-sm text-gray-600">
                  © 2020 Twitter, Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
