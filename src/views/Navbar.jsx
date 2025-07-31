import React, { useEffect, useState } from "react";

import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

import avatar from "../assets/avatar.png";
import UserProfile from "./UserProfile";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from "react-icons/md";
import nttlogo from "../assets/nttdatalogo.svg";

import "./navbar.css";

const Navbar = () => {
  const {
    setlogin1,
    userProfile,
    setUserProfile
    
  } = useStateContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setlogin1(false);  // Set login state to false
    navigate('/');         // Navigate to the root path
  };
  return (
    <div >
      <div className="flex justify-between md:mx-0  relative w-full ">
        <div className="flex">
          <img
            style={{ width: "250px", marginLeft: "-5px", marginTop: "5px" }}
            className=""
            src={nttlogo}
            alt="nttlogo"
          />
          <div
            className="mt-5 text-3xl text-gray-200"
          
            style={{ cursor: "pointer" }}
          >
          
          </div>
        </div>

       <div className="relative inline-flex items-center right-4 top-0">
  <div
    style={{ marginLeft: "-30px",marginTop:'-10px' }}
    className="flex items-center justify-center  cursor-pointer"
    onClick={() => setUserProfile(true)}
  >
    <img
      className="rounded-full ml-10 w-10 h-10 border border-gray-300 shadow-md"
      src={avatar}
      alt="user-profile"
    />
    <p className='whitespace-nowrap ml-1 text-xl flex mt-1'>
      <span className="text-black-400 text-white">Hi,</span>{' '}
      <span className="flex text-black-400 font-bold ml-1 text-white dark:text-white">
        Michael
        {!userProfile && <MdKeyboardArrowDown className="text-white text-14 mt-1" />}
        {userProfile && <MdKeyboardArrowUp className="text-white text-14 mt-1" />}
      </span>
    </p>
  </div>

  {/* UserProfile dropdown */}
  {userProfile && (
    <div className="absolute right-0 mt-16 z-50">
      <UserProfile />
    </div>
  )}
</div>

        </div>
      </div>
   
  );
};

export default Navbar;