import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from "/Icons/user.png";
import hamburger from "/Icons/hamburger.png";
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const HamburgerOpen = () => {
    setHamburgerOpen(true);
  };
  const HamburgerClose = () => {
    setHamburgerOpen(false);
  };

  return (

    <>
    <section className='navbar overflow-hidden fixed w-full top-0 z-50 shadow-lg'>
        <div className="container flex justify-between lg:grid grid-cols-3 gap-2 p-3 bg-white ">

            {/* Navigation part */}
            <div className='logo flex justify-start lg:ml-10 items-center'>
                        <Link to="/" className='hidden lg:block h2 color'>CrowdFund Connect</Link>

                 {/* For mobile view */}
                 <Link to="/" className=' lg:hidden h3 color'>CrowdFund Connect</Link>
            </div>
            {/* Navigation links */}  
            <div className='Navigation hidden lg:flex justify-evenly items-center'>
                 <Link to="/" className='h3 hover-effect-normal shrink'>Home</Link>
                 <Link to="/about" className='h3 hover-effect-normal shrink'>About</Link>
                 <Link to="/news" className='h3 hover-effect-normal shrink'>News</Link>
                 <Link to="/contact" className='h3 hover-effect-normal shrink'>Contact</Link>

            </div>

            {/* User profile with dropdown feature and hamburger for mobile view */}
            <div className='user-profile flex justify-end items-center'>
            
                <img src={user} className='user-image mr-2 lg:mr-15'/>
         <div
          className="hamburger hover-effect-normal lg:hidden cursor-pointer flex-1 flex justify-end "
        >

          <img src={hamburger} onClick={() => setHamburgerOpen((prev) => !prev)} 
           className={`w-10 h-7 mr-2 cursor-pointer transform transition-transform duration-600 ${
        hamburgerOpen ? 'rotate-x-180' : 'rotate-0'
      }`} />
        </div>
            </div>
        </div>

         {/* Hamburger menu items which will only show on smaller devices*/}
      {hamburgerOpen && (
        
        <div className="Navigation flex flex-col  bg-gray-100  w-full ">
         
          <Link
            to="/"
            onClick={HamburgerClose}
            className="h3 hover-effect-normal nav-items-mobile"
          >
            Home
          </Link>
             <Link
            to="/about"
            onClick={HamburgerClose}
            className="h3 hover-effect-normal nav-items-mobile"
          >
            About
          </Link>
          <Link
            to="/news"
            onClick={HamburgerClose}
            className="h3 hover-effect-normal nav-items-mobile"
          >
            News
          </Link>
         <Link
            to="/contact"
            onClick={HamburgerClose}
            className="h3 hover-effect-normal nav-items-mobile"
          >
            Contact
          </Link>
   
       
        </div>
      )}
    </section>

      {/* Fake navbar for the problem facing for fixed navbar */}
    <section className="FakeNavbar">
      <div className=" w-100% bg-white p-7 "></div>
    </section>
    </>
    
  );
}

export default Navbar;