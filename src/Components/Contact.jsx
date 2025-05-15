import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Initialize navigate for routing

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Navigate to the contact page and pass the values as query parameters
    navigate(
      `/contact?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&message=${encodeURIComponent(message)}`
    );
     setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      {/* <!-- Heading --> */}
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
        {/* <!-- Form --> */}
        <form class="space-y-6 ">
          {/* <!-- Name field --> */}
          <div>
            <label for="name" class="block text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
            />
          </div>
          {/* 
    <!-- Email field --> */}
          <div>
            <label for="email" class="block  text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
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
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
            ></textarea>
          </div>

          {/* Submit button  */}
          <div>
            <button type="submit" class="button w-full">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
