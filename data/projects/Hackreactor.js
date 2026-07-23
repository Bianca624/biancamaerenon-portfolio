import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import Hackreact from "../pictures/hackreactor/hackreactorlogo.png";
import Course from "../pictures/hackreactor/course.png";
import Reviews from "../pictures/hackreactor/reviews.png";
import Bestisa from "../pictures/hackreactor/best_isa.png";
import Google from "../pictures/hackreactor/google.png";
import Bgimage from "../pictures/hackreactor/bgimage.jpg";
import Facebook from "../pictures/hackreactor/facebook.gif";
import Linkedin from "../pictures/hackreactor/linkedin2.png";
import Googlegif from "../pictures/hackreactor/google.gif";
import Paypalgif from "../pictures/hackreactor/paypal.gif";
import Applegif from "../pictures/hackreactor/apple.gif";
import Accenture from "../pictures/hackreactor/accenture2.png";
import Visa from "../pictures/hackreactor/visa2.png";
import Microsoft from "../pictures/hackreactor/microsoft2.png";
import Capital from "../pictures/hackreactor/capitalone2.png";
import Amazon from "../pictures/hackreactor/amazon2.png";
import Boot1 from "../pictures/hackreactor/boot1.jpg";
import Boot2 from "../pictures/hackreactor/boot2.jpg";
import Boot3 from "../pictures/hackreactor/boot3.jpg";
import Syllabus from "../pictures/hackreactor/syllabus.png";

import Kevin from "../pictures/hackreactor/kevin2.jpg";
import Melissa from "../pictures/hackreactor/melissa2.jpg";
import Evelyn from "../pictures/hackreactor/evelyn2.jpg";

import Best1 from "../pictures/hackreactor/best1.png";
import Best2 from "../pictures/hackreactor/best2.png";
import Best3 from "../pictures/hackreactor/best3.png";

import Pic1 from "../pictures/hackreactor/kim2.jpg";
import Pic2 from "../pictures/hackreactor/The_First_Coding_School_with_Blockchain_Curriculum.jpg";
import Pic3 from "../pictures/hackreactor/campus-and-info-sessions.jpg";

import Quartz from "../pictures/hackreactor/quartz.png";
import Forbes from "../pictures/hackreactor/forbes.png";
import Techco from "../pictures/hackreactor/techco.png";

import LogoReactor from "../pictures/hackreactor/logoreactorwhite.png";
import Navbar from "../Navbar";
function Hackreactor() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      <Navbar />
      <header className="">
        <div className="w-full bg-gray-100 ">
          <h2 className="p-4 text-lg text-center">
            Hackreactor Sample Website
          </h2>
          <div className="flex h-24 lg:max-w-screen-lg lg:mx-auto lg:justify-center">
            <div className="flex justify-between w-full ">
              {/* <!-- LOGO --> */}
              <div className="flex items-center justify-center mx-2 my-4">
                <div className="">
                  {/* <img
                    className="object-contain"
                    src={Hackreact}
                    alt="hackreactlogo"
                  /> */}
                </div>
              </div>

              {/* <!-- Navigation --> */}
              <div className="flex flex-row-reverse items-center lg:flex-row">
                <button
                  onClick={openToggle}
                  className="focus:outline-none sm:hidden"
                >
                  <svg
                    className="w-8 h-8 text-black fill-current hover:text-gray-500"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div className="hidden font-semibold text-black text-md md:block">
                  <div className="flex">
                    <div className="px-4 rounded hover:bg-gray-500">
                      Bootcamps
                    </div>

                    <div className="px-4 rounded hover:bg-gray-500">
                      Professional Development
                    </div>

                    <div className="px-4 rounded hover:bg-gray-500">
                      {" "}
                      Prepare
                    </div>

                    <div className="px-4 rounded hover:bg-gray-500">
                      Outcomes
                    </div>

                    <div className="px-4 rounded hover:bg-gray-500">
                      {" "}
                      Events
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <button className="px-4 py-2 mx-2 font-semibold text-gray-100 bg-blue-400 border border-blue-400">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              open
                ? "flex flex-col  md:hidden px-2 text-black text-lg"
                : "hidden"
            }
          >
            <div className="px-4 rounded hover:bg-gray-500"> Bootcamps</div>

            <div className="px-4 rounded hover:bg-gray-500">
              Professional Development
            </div>

            <div className="px-4 rounded hover:bg-gray-500"> Prepare</div>

            <div className="px-4 rounded hover:bg-gray-500"> Outcomes</div>

            <div className="px-4 rounded hover:bg-gray-500"> Events</div>
          </div>
        </div>
      </header>
      {/* End of header */}

      <main>
        <div className="flex flex-col h-screen">
          <div
            className="flex items-center justify-center flex-1 text-center bg-no-repeat bg-cover lg:bg-cover"
            style={{ backgroundImage: `url(${Bgimage})` }}
          >
            <div className="">
              <div className="lg:max-w-screen-md">
                <p className="text-2xl font-semibold text-gray-100 lg:text-4xl">
                  The Most Advanced Coding Bootcamp: Think Like a Software
                  Engineer
                </p>
              </div>
              <div className="my-8">
                <p className="max-w-sm text-2xl font-normal text-gray-100 lg:max-w-screen-md">
                  Don't just learn to code.
                  <strong>Reinvent your career</strong> full-time, part-time
                  <i>in</i>-person or online
                </p>
              </div>
              <div className="my-8">
                <button className="px-4 py-2 font-semibold text-gray-100 bg-blue-400 border border-blue-400 rounded-sm">
                  Start Learning For Free
                </button>
              </div>
            </div>
          </div>

          <div
            className="bg-opacity-50 "
            style={{ backgroundColor: "#d8d8d8" }}
          >
            <div className="flex flex-col items-center justify-center mt-6 lg:flex-row">
              <div className="">
                <p className="text-center text-black text-md">
                  Rated “Best Coding Bootcamp”
                </p>
                <div className="m-2">
                  <img
                    className="object-contain w-auto h-16"
                    alt="course"
                    src={Course}
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-black text-md">Quora Reviews</p>
                <div className="m-2">
                  <img
                    className="object-contain w-auto h-16"
                    alt="reviews"
                    src={Reviews}
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-black text-md">
                  Rated “Best ISA Bootcamp”
                </p>
                <div className="m-2">
                  <img
                    className="object-contain w-auto h-16"
                    alt="Bestisa"
                    src={Bestisa}
                  />
                </div>
              </div>
              <div>
                <p className="text-center text-black text-md">
                  Over 8,000 Alumni Including 65 at
                </p>
                <div className="m-2">
                  <img
                    className="object-contain w-auto h-16"
                    alt="google"
                    src={Google}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <!-- We now have the best ISA in the industry --> */}
        <hr className="border-4 border-blue-500" />
        <div className="flex items-center justify-center p-8 bg-gray-600">
          <div className="max-w-4xl">
            <p className="text-xl text-gray-100">
              We now have the best ISA in the industry
            </p>
            <p className="mt-4 text-lg font-light text-gray-100">
              In response to financial uncertainty, we’ve updated our income
              share agreement terms to be even more accommodating for our
              students through the end of 2020.
            </p>

            <button className="px-4 py-2 mt-4 text-sm font-semibold text-gray-100 bg-blue-600 border border-blue-600 rounded-sm">
              Learn more
            </button>
          </div>
        </div>

        {/* <!-- Hack Reactor Grads are Our First Choice --> */}

        <div className="flex items-center justify-center lg:max-w-screen-xl lg:mx-auto">
          <div className="mt-12">
            <div className="">
              <p className="text-2xl text-center text-black">
                “Hack Reactor Grads are Our First Choice”
              </p>
              <p className="mt-5 text-center text-black text-md">
                The best coding bootcamps simulate a real-world software
                environment for their students; the grads are so well-prepared,
                they come in and hit the ground running, that’s really what
                we’re looking for.
              </p>
              <p className="text-center text-black text-md">
                <i>- Dustin B., Cisco</i>
              </p>
            </div>
            {/* <!-- LOGO -->
                   <!-- ROW 1 --> */}
            <div className="bg-white">
              <div className="flex flex-wrap mt-4">
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    alt="facebook"
                    src={Facebook}
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    alt="Linkedin"
                    src={Linkedin}
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Googlegif}
                    alt="google"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Paypalgif}
                    alt="paypal"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Applegif}
                    alt="apple"
                  />
                </div>

                {/* <!-- LOGO -->
                  <!-- ROW 2 --> */}

                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Amazon}
                    alt="amazon"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Capital}
                    alt="capital"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Microsoft}
                    alt="Microsoft"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Visa}
                    alt="Visa"
                  />
                </div>
                <div className="w-1/3 lg:w-1/5">
                  <img
                    className="object-contain w-full h-20"
                    src={Accenture}
                    alt="accenture"
                  />
                </div>
              </div>
            </div>

            {/* <!-- The Best and Most Immersive Coding Bootcamp --> */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="mx-4 text-justify lg:max-w-4xl">
                  <p className="text-2xl text-left text-black">
                    The Best and Most Immersive Coding Bootcamp
                  </p>
                  <p className="mt-4 text-black text-md">
                    Hack Reactor is one of the top coding bootcamps and we
                    select high-potential students through a rigorous admissions
                    process. In our software engineering bootcamp, we train
                    students through over 800 hours of Computer Science and
                    JavaScript curriculum that closely models the software
                    engineering industry.
                  </p>
                  <p className="mt-4 text-black text-md">
                    Led by passionate and experienced teachers, engineering
                    leaders and former hiring managers, we produce software
                    engineers the best teams want to hire. We offer our
                    immersive bootcamp programs at Galvanize campuses in Austin,
                    Boulder, Denver, Los Angeles, New York, Phoenix, San
                    Francisco, Seattle, and live online.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full h-full ">
                  <iframe
                    className="object-contain w-full h-full"
                    src="https://player.vimeo.com/video/329678340"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="Video about Hack Reactor bootcamp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Our Bootcamps --> */}

        <div className="mt-12">
          <div className="flex justify-center mb-4 text-4xl">
            <h2>Our Bootcamps</h2>
          </div>
          <div className="">
            <div className="flex items-center justify-center lg:max-w-screen-xl lg:mx-auto">
              <div className="flex flex-col mb-10 text-center lg:flex-row">
                {/* pic 1 */}
                <div className="flex flex-col w-full shadow-lg lg:w-1/3">
                  <div className="flex justify-center object-contain">
                    <img className="w-full h-64" src={Boot1} alt="boot1" />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="mt-6">
                      <p className="text-2xl font-semibold text-center">
                        Onsite
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="text-2xl text-center">12 Weeks Full Time</p>
                    </div>
                    <div className="px-4">
                      <p className="text-justify">
                        Join HackReactor’s software engineering program at one
                        of the Galvanize campuses across the nation.
                      </p>
                    </div>
                    <div className="my-4">
                      <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full shadow-lg lg:mx-4 lg:w-1/3">
                  <div className="flex justify-center object-contain">
                    <img className="w-full h-64" src={Boot2} alt="boot2" />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="mt-6">
                      <p className="text-2xl font-semibold text-center">
                        Remote
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="text-2xl text-center">
                        12 Weeks Full-Time (ONLINE)
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="text-justify">
                        Reinvent your career remotely with our live online
                        immersive coding bootcamp, which directly mirrors our
                        in-person program.
                      </p>
                    </div>
                    <div className="my-4">
                      <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full shadow-lg lg:w-1/3">
                  <div className="flex justify-center object-contain">
                    <img className="w-full h-64" src={Boot3} alt="boot3" />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="mt-6">
                      <p className="text-2xl font-semibold text-center">
                        Remote Part-Time
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="text-2xl text-center">
                        9 Months Full-Time (ONLINE)
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="text-justify">
                        Take the exact same Hack Reactor coding bootcamp after
                        hours, live online, without having to quit your day job.
                      </p>
                    </div>
                    <div className="my-4">
                      <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Download the Syllabus of Our Immersive Program --> */}
        <div className="">
          <div className="flex p-4 lg:max-w-screen-xl lg:mx-auto lg:p-0">
            <div className="flex flex-col items-center justify-center w-full p-4 shadow-lg lg:flex-row">
              <div className="object-contain">
                <img className="w-56 h-40" src={Syllabus} alt="syllabus" />
              </div>
              <div className="ml-6">
                <h2 className="mb-2 text-xl font-semibold">
                  Download the Syllabus of Our Immersive Program
                </h2>
                <p className="max-w-xl">
                  We constantly improve our curriculum based on new trends,
                  changing needs of the tech industry, and feedback from our
                  students and alumni.
                </p>
              </div>
              <div className="ml-5">
                <button className="px-4 py-2 mt-4 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                  Get The Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 
    <!-- I just accepted an offer from Amex --> */}
        <div className="flex justify-center pt-20">
          <div className="flex flex-col max-w-screen-xl mx-auto lg:flex-row">
            <div className="p-4 lg:p-0">
              <div className="shadow-lg ">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/3">
                    <div className="object-contain w-full h-64 lg:h-48">
                      <img
                        className="w-full h-full"
                        src={Melissa}
                        alt="melissa"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <div>
                      <p>
                        "I just accepted an offer from Amex to be a software
                        engineer in New York, and it is exactly the type of
                        position I wanted. Galvanize’s career services and
                        support have far surpassed my expectations."
                      </p>
                    </div>
                    <div>
                      <p className="mt-2">
                        <i>
                          Melissa Louie, Software Engineer, American Express
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4 shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/3">
                    <div className="object-contain w-full h-64 lg:h-48">
                      <img className="w-full h-full" src={Kevin} alt="kevin" />
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <div>
                      <p>
                        "I just accepted an offer from Amex to be a software
                        engineer in New York, and it is exactly the type of
                        position I wanted. Galvanize’s career services and
                        support have far surpassed my expectations."
                      </p>
                    </div>
                    <div>
                      <p className="mt-2">
                        <i>Kevin Fang, Software Engineer, Self-Employed</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow-lg ">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/3">
                    <div className="object-contain w-full h-64 lg:h-48">
                      <img
                        className="w-full h-full"
                        src={Evelyn}
                        alt="evelyn"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <div>
                      <p>
                        "I’ve been around teachers for a really long time, both
                        in a collegial sense and in a student-teacher type of
                        relationship. One of my favorite teachers of all time
                        was the lead instructor of Hack Reactor at Austin."
                      </p>
                    </div>
                    <div>
                      <p className="mt-2">
                        <i>
                          Evelyn Binkard, Software Engineer, Kapsch Trafficcom
                          North America
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-0">
              <div className="w-full h-full shadow-lg lg:ml-4 ">
                <div className="flex items-center justify-center w-full ">
                  <img className="w-48 h-32" src={Best1} alt="best1" />
                </div>
                <div className="flex items-center justify-center w-full ">
                  <img className="w-48 h-32" src={Best2} alt="best2" />
                </div>
                <div className="flex items-center justify-center w-full">
                  <img className="w-48 h-32" src={Best3} alt="best3" />
                </div>
                <div className="p-4 pt-12">
                  <p className="text-center">
                    Career Karma, Switchup, and Course Report all consider Hack
                    Reactor a top bootcamp in several categories.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- adasd --> */}
          </div>
        </div>

        {/* <!-- What’s Getting Attention at Hack Reactor? --> */}
        <div className="flex items-center justify-center lg:max-w-screen-xl lg:mx-auto">
          <div>
            <div className="flex justify-center p-4 lg:mt-16 lg:mb-4">
              <h2 className="font-serif text-4xl text-center">
                What’s Getting Attention at Hack Reactor?
              </h2>
            </div>
            <div className="p-4 lg:p-0">
              <div className="shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="object-contain h-64 lg:h-48">
                    <img
                      className="w-full h-full lg:w-48"
                      src={Pic1}
                      alt="pic1"
                    />
                  </div>
                  <div className="p-4 text-justify">
                    <h2>Download the Syllabus of Our Immersive Program</h2>
                    <p className="max-w-2xl">
                      Galvanize, the leader in technology workforce education,
                      announced today that Harsh Patel has been named CEO of
                      Galvanize. Karl Maier also joins as Executive Chairman.
                      Former CEO, Al Rosabal, will be stepping down as CEO after
                      making key additions to the executive leadership team.
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <button className="px-4 py-2 mt-4 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-4 shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="object-contain h-48">
                    <img
                      className="w-full h-full lg:w-48"
                      src={Pic2}
                      alt="pic2"
                    />
                  </div>
                  <div className="p-4 text-justify">
                    <h2>Top 6 jobs that can be done remotely</h2>
                    <p className="max-w-2xl">
                      If you’ve always wanted to work from home, there’s never
                      been a better time to start thinking about a new career.
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <button className="px-4 py-2 mt-4 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="object-contain h-48">
                    <img
                      className="w-full h-full lg:w-48"
                      src={Pic3}
                      alt="pic3"
                    />
                  </div>
                  <div className="p-4 text-justify">
                    <h2>Take Hack Reactor Courses at Galvanize Campuses</h2>
                    <p className="max-w-2xl">
                      Hack Reactor’s top coding bootcamps are now taught at
                      Galvanize campuses in Austin, Boulder, Denver, Los
                      Angeles, New York, Phoenix, San Francisco, and Seattle (as
                      well as online). Galvanize campuses are unique technology
                      ecosystems designed to support your learning journey while
                      providing access to professional mentorship, unparalleled
                      networking opportunities, industry-related events, and
                      growing startups all in one building.
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <button className="px-4 py-2 mt-4 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- asda --> */}

        {/* <!-- Hack Reactor in the News --> */}
        <div className="flex items-center justify-center lg:max-w-screen-xl lg:mx-auto">
          <div className="p-4 lg:p-0">
            <div className="flex justify-center mt-16 mb-4">
              <h2 className="font-serif text-4xl">Hack Reactor in the News</h2>
            </div>

            <div className="flex flex-col text-center lg:flex-row">
              <div className="flex flex-col w-full shadow-lg lg:w-1/3">
                <div className="flex justify-center object-contain">
                  <img className="w-full h-full" src={Quartz} alt="quartz" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="px-8">
                    <p className="text-left">
                      My cohort included a lawyer, a neuroscientist, a Navy
                      helicopter mechanic and a professional video-game player.
                    </p>
                  </div>
                  <div className="my-4">
                    <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full shadow-lg lg:mx-4 lg:w-1/3">
                <div className="flex justify-center object-contain">
                  <img className="w-full h-full" src={Forbes} alt="forbes" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="px-8">
                    <p className="text-left">
                      “The Hack Reactor bootcamp experience was a total game
                      changer.”
                    </p>
                  </div>
                  <div className="my-4">
                    <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full shadow-lg lg:w-1/3">
                <div className="flex justify-center object-contain">
                  <img className="w-full h-full" src={Techco} alt="techco" />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div className="px-8">
                    <p className="text-center">The Top 33 Coding Bootcamps.</p>
                  </div>

                  <div className="my-4">
                    <button className="px-4 py-2 font-semibold text-blue-500 border border-blue-400 rounded-sm">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Get Started With Hack Reactor --> */}
        <div className="mt-10">
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <h2 className="font-serif text-4xl">
                    Get Started With Hack Reactor
                  </h2>
                </div>
                <div className="mb-10">
                  <button className="px-4 py-2 mt-6 font-semibold text-gray-100 bg-blue-500 border border-blue-400">
                    Learn More about our Admissions Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
                  <!-- FOOTER --> */}

        <div className="px-6 py-4 bg-blue-400">
          <div className="w-full lg:max-w-screen-lg lg:mx-auto">
            <div className="flex items-center justify-center">
              <div className="w-full my-4">
                <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
                  <div className="w-full lg:w-1/2">
                    <img
                      className="object-contain"
                      src={LogoReactor}
                      alt="logoreactor"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center">
                      <div className="w-full mt-4 lg:mt-0">
                        <p className="text-lg font-semibold text-white">
                          Stay current. Stay connected. Sign up for our
                          newsletter!
                        </p>
                      </div>
                      <div className="flex justify-center w-full lg:w-32 lg:ml-2">
                        <button className="px-4 py-2 font-semibold text-gray-200 border border-white">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- GET STARTED --> */}
            <hr className="border-gray-400 border-6" />
            <div className="my-6">
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                  <div className="my-2">
                    <p className="font-semibold text-white">GET STARTED</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Admission Process</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Live Prep Course</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Scholarships</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Tour</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                  <div className="my-2">
                    <p className="font-semibold text-white">COMPANY</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">About</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Careers</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Blog</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Regulatory Information</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                  <div className="my-2">
                    <p className="font-semibold text-white">MORE</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Partnerships</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">FAQ</p>
                  </div>
                  <div className="my-2">
                    <p className="text-white">Enterprise</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                  <div className="my-2">
                    <p className="font-semibold text-center text-white lg:text-left">
                      REVIEWS
                    </p>
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                      <div className="my-2 lg:my-0">
                        <p className="text-white">Google</p>
                      </div>
                      <div className="my-2 lg:my-0">
                        <p className="text-white lg:mx-2">Switch</p>
                      </div>
                      <div className="my-2 lg:my-0">
                        <p className="text-white lg:mx-2">Yelp</p>
                      </div>
                      <div className="my-2 lg:my-0">
                        <p className="text-white lg:mx-2">Course Report</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-center text-white lg:text-left">
                      SOCIAL
                    </p>
                    <div className="flex ">
                      <div className="px-2">
                        <p className="text-white">
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </p>
                      </div>
                      <div className="px-2">
                        <p className="mx-2 text-white">
                          {" "}
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </p>
                      </div>
                      <div className="px-2">
                        <p className="mx-2 text-white">
                          {" "}
                          <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </p>
                      </div>
                      <div className="px-2">
                        <p className="mx-2 text-white">
                          {" "}
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </p>
                      </div>
                      <div className="px-2">
                        <p className="mx-2 text-white">
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-blue-600">
          <div className="w-full lg:max-w-screen-lg lg:mx-auto">
            <div className="flex justify-between">
              <div>
                <p className="text-white">
                  2020 Galvanize. All rights reserved.
                </p>
              </div>
              <div>
                <p className="">Terms / Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hackreactor;
