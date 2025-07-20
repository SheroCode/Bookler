import { useState } from "react";
import { IoEarth } from "react-icons/io5";
import { MdContactSupport, MdHome } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import logo from "../../assets/images/whitelogo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isLoggedin = false;
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-10 left-5 h-4/5 bg-blue-600  z-40  
        ${
          isCollapsed ? "w-16" : "w-58"
        } rounded-3xl flex flex-col justify-between px-4 py-6`}>
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className='flex items-center justify-center mb-8 gap-10'>
            {!isCollapsed && <img src={logo} alt='Logo' className='h-6 ' />}
            {/* Toggle Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className='z-50  p-2 text-white bg-blue-600  '>
              <RiMenu3Line size={22} />
            </button>
          </div>

          {/* Menu Items */}
          <div className='space-y-4 text-white'>
            <Link
              to=''
              className='flex items-center gap-4 hover:bg-blue-700 p-2 rounded-full cursor-pointer'>
              <MdHome size={22} />
              {!isCollapsed && <span>Home</span>} 
            </Link>
            <Link
              to='mybooking'
              className='flex items-center gap-4 hover:bg-blue-700 p-2 rounded-full cursor-pointer'>
              <TbBrandBooking size={22} />
              {!isCollapsed && <span>My Bookings</span>}
            </Link>
            <Link
              to=''
              className='flex items-center gap-4 hover:bg-blue-700 p-2 rounded-full cursor-pointer'>
              <IoEarth size={22} />
              {!isCollapsed && <span>Explore</span>}
            </Link>
            <Link
              to=''
              className='flex items-center gap-4 hover:bg-blue-700 p-2 rounded-full cursor-pointer'>
              <MdContactSupport size={22} />
              {!isCollapsed && <span>Support</span>}
            </Link>
          </div>
        </div>

        {/* Bottom - Sign Up */}

        {!isLoggedin && (
          <div className='text-center mt-6'>
            {!isCollapsed && (
              <Link to="register" className='bg-white text-red-600 border-2 border-red-600 hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-semibold'>
                Sign Up Now
              </Link>
            )}
          </div>
        )}
      </aside>
    </>
  );
};

export default SideBar;
