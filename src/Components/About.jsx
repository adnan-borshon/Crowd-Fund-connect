import React from "react";

function About() {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-center  mx-5">
      <h1 className="my-10 text-4xl font-extrabold color">
        About CrowdFund Connect
      </h1>
      <div className="container grid grid-rows-4 gap-10 lg:w-[60%] mx-auto lg:mt-5">
        <div className="about-sections">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p className="p1 text-lg">
            CrowdFund Connect is dedicated to connecting passionate individuals
            with causes that make a real difference. Our platform allows users
            to support meaningful projects through a virtual coin system, making
            donating simple, fun, and accessible to everyone.
          </p>
          <p className="p1 text-lg">
            Since our launch, we've helped connect hundreds of donors with
            dozens of worthy causes, from environmental conservation to
            education initiatives and humanitarian aid.
          </p>
        </div>
        <div className="about-sections">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="p1 text-lg">
            Founded in 2023, CrowdFund Connect began as a simple idea: create a
            platform where anyone can support causes they care about, regardless
            of their financial situation. By using virtual coins, we've made
            donating an engaging experience that focuses on the impact rather
            than the monetary value.
          </p>
          <p className="p1 text-lg">
            Since our launch, we've helped connect hundreds of donors with
            dozens of worthy causes, from environmental conservation to
            education initiatives and humanitarian aid.
          </p>
        </div>
        <div className="about-sections">
          <h1 className="text-3xl font-bold">Our Goal</h1>
          <ul className="p1 text-lg list-disc list-inside">
            <li>
              Create a welcoming platform for both donors and project creators
            </li>
            <li>
              Highlight impactful and transparent initiatives that deserve
              support
            </li>
            <li>Build a community of engaged, passionate change-makers</li>
            <li>
              Educate and inspire people about various social and environmental
              causes
            </li>
            <li>Make the act of giving accessible, engaging, and rewarding</li>
          </ul>
        </div>

        <div className="about-sections">
          <h1 className="text-3xl font-bold">Join Us</h1>
          <p className="p1 text-lg">
            Whether you're looking to support worthy causes or spread the word
            about our platform, we invite you to become part of the CrowdFund
            Connect community. Together, we can make a real difference in the
            world, one coin at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
