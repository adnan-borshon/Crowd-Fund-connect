import React, { useState } from "react";
import { Link } from "react-router-dom";
import Facebook from "/Icons/facebook.png";
import Twitter from "/Icons/twitter.png";
import Instagram from "/Icons/instagram-logo.png";
import LinkedIn from "/Icons/linkedin.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Footer() {
  const [Email, setEmail]= useState("");

const notify = () => {
      toast.success("Subscribed", {
        theme: "light",
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  
        transition: Bounce,
      });
    };

  return (
    <section className="overflow-hidden bg-gray-900 mt-10 dark:bg-[#0e2442] border-b-2 border-gray-600 dark:border-gray-500">
      {/* whole footer container */}
      <div className="container dark:!bg-[#0e2442] shrink grid lg:grid-cols-4 gap-3 p-4 border-t-2 ">
        {/* About Crowd Fund part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">About CrowdFund Connect</h2>
          <p className="text-gray-300 ">
            Connecting passionate donors with meaningful causes through our
            virtual coin platform.
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
        <div className="flex flex-col gap-2 w-max">
          <h2 className="h2 color">Quick Links</h2>
          <Link to="/" className="text-gray-300 hover-effect-normal">
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
        <div className="flex flex-col gap-2 w-max">
          <h2 className="h2 color">LEGAL</h2>
          <Link
            to="/privacy-policy"
            className="text-gray-300 hover-effect-normal"
          >
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-300 hover-effect-normal">
            Terms of Service
          </Link>
        </div>

        {/* Subscribe part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2 color">Subscribe</h2>
          <p className="text-gray-300 ">
            Stay updated with the latest news and events
          </p>
          <form 
            onSubmit={(e) => {
    e.preventDefault(); 
    
    setEmail(""); 
  }}
  >
            <div className="flex flex-col">

          <input
            type="email"
            placeholder="Your email address"
            value={Email}
            className="inputs !text-white"
            onChange={(e) => setEmail(e.target.value)} 
            />
          <button 
          type="submit"
          onClick={notify}
          className="button mt-2">Subscribe</button>
          </div>
          </form>
        </div>
      </div>
      {/* copyright tag */}
      <p className="text-gray-300 flex justify-center p-4">
      
        © 2025 CrowdFund Connect. All rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
