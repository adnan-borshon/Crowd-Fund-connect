import React from "react";
import { Link } from "react-router-dom";
import Facebook from "/Icons/facebook.png";
import Twitter from "/Icons/twitter.png";
import Instagram from "/Icons/instagram-logo.png";
import LinkedIn from "/Icons/linkedin.png";
function Footer() {
  return (
    <section className="overflow-hidden bg-[#1f2937] mt-10">
      {/* whole footer container */}
      <div className="container shrink grid lg:grid-cols-4 gap-3 p-4 border-t-2 border-b-2 border-gray-300">
        {/* About Crowd Fund part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">About CrowdFund Connect</h2>
          <p className="text-gray-300 ">
           Connecting passionate donors with meaningful causes through our virtual coin platform.
          </p>

          {/* social media links with icon*/}
          <div className="social-links flex justify-start gap-10  mt-2">
            <a
              href="https://www.facebook.com/crowdFundconnect/"
              target="_blank"
              rel="noopener noreferrer"
             className="hover-effect-normal h-5 w-5"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/crowdFundconnect/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-effect-normal h-5 w-5"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/crowdFundconnect/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover-effect-normal h-5 w-5"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/crowdFundconnect/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover-effect-normal h-5 w-5"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
        {/* Quick links of footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">Quick Links</h2>
          <Link to="/home" className="text-gray-300 hover-effect-normal">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover-effect-normal">
            About
          </Link>
          <Link to="/news" className="text-gray-300 hover-effect-normal">
            News
          </Link>
          <Link to="/contact" className="text-gray-300 hover-effect-normal">
            Contact
          </Link>
        </div>

        {/* Legal of footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">LEGAL</h2>
          <Link to="/privacy-policy" className="text-gray-300 hover-effect-normal">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-300 hover-effect-normal">
            Terms of Service
          </Link>
        </div>

        {/* Subscribe part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">Subscribe</h2>
          <p className="text-gray-300 ">Stay updated with the latest news and events</p>
          <input
            type="text"
            placeholder="Your email address"
            className="inputs"
          />
          <button className="button mt-2">Subscribe</button>
        </div>
      </div>
      {/* copyright tag */}
      <p className="text-gray-300 flex justify-center p-4">  © 2025 CrowdFund Connect. All rights Reserved. </p>
    </section>
  );
}

export default Footer;
