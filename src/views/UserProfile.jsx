import React, { useEffect, useRef } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import { useStateContext } from '../contexts/ContextProvider';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { setlogin1,setUserProfile,setCollapsed } = useStateContext();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setUserProfile(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setUserProfile]);

  function handleLogout() {
    setlogin1(false);
      setUserProfile(false)
      setCollapsed(false)
    localStorage.clear();
    navigate('/');
  }

  return (
    <div
      ref={profileRef}
      className="relative  top-8  bg-[#6f75b7] p-2 rounded-lg w-48 h-20 border border-gray-800 dark:border-[#4f4f4f]"
    >
      <div className="flex">
        <CgProfile className="text-white text-xl mt-1" />
        <p className="text-xl text-gray-200 ml-2 whitespace-nowrap">User Profile</p>
      </div>
      <div className="mt-1 flex">
        <AiOutlineLogout className="text-white text-xl mt-1" />
        <button
          style={{ borderRadius: '10px', marginLeft: '10px' }}
          className="text-xl text-gray-200  hover:drop-shadow-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
