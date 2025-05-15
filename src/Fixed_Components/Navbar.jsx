import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import user_logo from "/Icons/user.png";
import hamburger from "/Icons/hamburger.png";
import coin from "/Icons/coins.png";
import hover_coin from "/Icons/hover_coins.png";
import { useCoin } from "../Context/CoinContext";
import crowdFund_logo from "/crowdFund_logo.png";
import sun from "/Icons/sun.png";
import moon from "/Icons/moon.png";
import DarkMode from "../hooks/DarkMode";
import white_user_logo from "/Icons/hover_user.png"

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
  const { user, addCoins, removeCoins } = useCoin();
  const [theme, toggleTheme] = DarkMode();

  const HamburgerClose = () => {
    setHamburgerOpen(false);
    setUserMenuOpen(false);
  };


  // For handeling the click outside of the user menu and hamburger menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (
        hamburgerBtnRef.current &&
  hamburgerMenuRef.current &&
  !hamburgerBtnRef.current.contains(event.target) &&
  !hamburgerMenuRef.current.contains(event.target)
      ) {
        setHamburgerOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);
  return (
    <>
      <section className="navbar  fixed w-full top-0 z-50 shadow-lg">
        <div className="container  flex justify-between lg:grid grid-cols-3 gap-2 p-3 bg-white dark:!bg-gray-950 shadow-lg dark:!shadow-gray-900 ">
          {/* Navigation part */}
          <div className="logo flex justify-start lg:ml-10 items-center">
            <img src={crowdFund_logo} className="h-10 w-10 object-cover mr-2"/>
            
            <Link to="/" className="hidden lg:block h2 color">
              CrowdFund Connect
            </Link>

            {/* For mobile view */}
            <Link to="/" className=" lg:hidden h3 color">
              CrowdFund Connect
            </Link>
          </div>
          {/* Navigation links */}
          <div className="Navigation hidden lg:flex justify-evenly items-center">
            <Link to="/" className="h3 hover-effect-normal shrink">
              Home
            </Link>
            <Link to="/about" className="h3 hover-effect-normal shrink">
              About
            </Link>
            <Link to="/news" className="h3 hover-effect-normal shrink">
              News
            </Link>
            <Link to="/contact" className="h3 hover-effect-normal shrink">
              Contact
            </Link>
          </div>

          {/* User profile with dropdown feature,dark mode and hamburger for mobile view */}
          <div className="user-profile gap-2 flex justify-end items-center">
            {/* dark mode */}
            <div 
            onClick={toggleTheme}
            className="darkMode relative cursor-pointer transform-view hover:scale-110">

              {
                theme=== "dark"? (
        <img src={sun} className="h-7 w-7  bg-gray-800 object-cover shadow-2xl p-1 rounded-full"/>

                ): (
              <img src={moon} className="h-7 w-7  bg-gray-100 shadow-2xl object-cover p-1 rounded-full"/>

                )

              }

            </div>
            {/* user dropdown menu  */}
            <div className=" " ref={userMenuRef}>
              {/* avatar toggle */}
            
              <img
                src={`${theme === "dark"? `${white_user_logo}`: `${user_logo}` }`}
                alt="User"
                className={`user-image  lg:mr-15 ${userMenuOpen ? 'bg-[#348cff]' : ''}`}
                   onClick={() => {
                  setUserMenuOpen((open) => !open);
                  if (hamburgerOpen) {
                    setHamburgerOpen(false);
                  }
                }}
                />
             
                
              {/* dropdown menu */}
              {userMenuOpen && (
                <div className="absolute p-2 right-0 lg:right-15 flex flex-col justify-center  mt-2 w-50 bg-white border border-gray-400 dark:bg-gray-900 rounded shadow-lg z-20">
                  <div className="px-4 py-2  ">
                    <p className=" font-semibold">Guest User</p>
                  </div>

                  <div className="px-4 py-3 flex items-center justify-start">
                    <img src={coin} className="h-5 w-5 mr-2 mt-1 " />
                    <p className="text-gray-800 dark:text-white">{user.coins} Coins</p>
                  </div>

                  <Link
                    className="group button  text-center flex justify-center  !border !border-gray-400 "
                    to="/addCoins"
                    onClick={() => {
                      setUserMenuOpen(false);
                    }}
                  >
                    <img
                      src={hover_coin}
                      className="absolute left-12 h-5 w-5 mr-1 mt-1 transform transition-opacity duration-200 ease-in z-60 group-hover:hidden"
                    />
                    <img
                      src={coin}
                      alt="hover"
                      className="h-5 w-5 mr-1 group-hover:z-80 mt-1 "
                    />
                    Add Coins
                  </Link>
                </div>
              )}
            </div>
            {/* Hidden hamburger menu for mobile view */}
  
            <div 
            ref={hamburgerBtnRef}
                   onClick={()=>{
                if(userMenuOpen){
                setUserMenuOpen(false);
              }
           
           setHamburgerOpen((prev)=>!prev);
            }
          }
            className="lg:hidden ">
              <div className={`hamburger transition-transform ${hamburgerOpen ? '  rotate-[-45deg] translate-y-[12px]': ''}`}
      
              ></div>
              <div className={`hamburger transform-content !duration-200 ${hamburgerOpen ? ' opacity-0': 'opacity-100'}`}
       
              ></div>
              <div className={`hamburger transition-transform ${hamburgerOpen ? '  rotate-45 translate-y-[-12px]': ''}`}
              ></div>
            </div>
          </div>
        </div>

        {/* Hamburger menu items which will only show on smaller devices*/}
        {hamburgerOpen && (
          <div
            ref={hamburgerMenuRef}
            className="Navigation dark:bg-gray-800 flex flex-col  bg-gray-100  w-full "
          >
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
      <section className="FakeNavbar ">
        <div className=" w-100% dark:bg-gray-900 bg-white p-7 "></div>
      </section>
    </>
  );
}

export default Navbar;
