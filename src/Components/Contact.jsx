import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); 
   const location = useLocation();

  const handleSubmit = (e) => {
       setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
   
    // Navigate to the contact page and pass the values as query parameters
     if (location.pathname === "/contact"){
    navigate(
      `/contact?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&message=${encodeURIComponent(message)}`
    );
     }
  };
    const notify = () => {
      toast.success("Submitted", {
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
    <>
      {/*  Heading */}
      <div className="contact-header  w-full flex flex-col justify-center items-center text-center mt-10">
        <h1 class="text-3xl font-extrabold dark:!text-[#348cff] text-gray-900 mb-4">
          Contact Us
        </h1>
        <p class="p1  mx-5 lg:w-[40%]">
          Have questions, suggestions, or need assistance? Fill out the form
          below and our team will get back to you shortly.
        </p>
      </div>

      <section
        onSubmit={handleSubmit}
        id="contact"
        class="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        {/*  Form  */}
        <form class="space-y-6 ">
          {/*  Name field */}
          <div>
            <label for="name" class="block text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
            />
          </div>
          {/*  Email field  */}
          <div>
            <label for="email" class="block  text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
            />
          </div>

          {/* Message field */}
          <div>
            <label for="message" class="block text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
            ></textarea>
          </div>

          {/* Submit button  */}
          <div>
            <button 
            onClick={notify} 
            type="submit" class="button w-full">
              Send Message
            </button>
          </div>
        </form>
         <ToastContainer />
      </section>
    </>
  );
}

export default Contact;
