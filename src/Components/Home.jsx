import React from "react";
import coin from "/Icons/coins.png";
import search from "/Icons/search.png";
import donate from "/Icons/donate.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Campaigns from "./Campaigns";
function Home() {
  return (
    <>
      <section className="hero overflow-hidden mx-auto">
        <div className="container w-full ">
          {/* Hero section */}
          <div className="hero py-15 bg-color lg:w-full flex flex-col justify-center items-center text-center shrink">
            <h1 className="text-6xl lg:text-7xl  lg:w-[58%] font-bold text-white">
              Make a Difference Support What Matters
            </h1>
            <h3 className="text-white m-5 text-lg">
              Join our virtual crowdfunding community and support causes that
              create real impact.
            </h3>
          </div>
          {/* How the website works section*/}
          <div className="2ndSection  bg-white grid grid-rows-3 lg:grid-rows-2 lg:mt-10 mb-10">
            <div className="upperPart row-span-1 gap-2 flex flex-col justify-center items-center text-center">
              <h3 className="text-[#348cff] font-semibold text-lg">
                HOW IT WORKS
              </h3>
              <h1 className="h1">Making a difference is easy</h1>
              <p className="p1 text-lg mx-4">
                Support causes you care about in just three simple steps
              </p>
            </div>
            <div className="lowerPart row-span-2 lg:mx-20 lg:grid grid-cols-3  shrink">
              {/* this part css is on index.css file */}
              <div className="_2nd-section-lower-part">
                <img src={coin} className="icon" />
                <div>
                  <h2>Add coins</h2>
                  <p>
                    Start by adding virtual coins to your account. These coins
                    will be used to support campaigns you care about.
                  </p>
                </div>
              </div>
              <div className="_2nd-section-lower-part">
                <img src={search} className="icon" />
                <div>
                  <h2>Browse Projects</h2>
                  <p>
                    Explore ongoing projects and campaigns that need your
                    support. Filter by categories or status.
                  </p>
                </div>
              </div>
              <div className="_2nd-section-lower-part">
                <img src={donate} className="icon" />
                <div>
                  <h2>Donate Coins</h2>
                  <p>
                    Contribute your virtual coins to projects you believe in and
                    track their progress towards their goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <Campaigns />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}

export default Home;
