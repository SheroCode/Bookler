import { BiSolidHotel } from "react-icons/bi";
import { MdOutlineFlightTakeoff, MdVilla } from "react-icons/md";
import { RiTaxiFill } from "react-icons/ri";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";
import { useState } from "react";

function Navbar() {
  const loggedIn = useSelector((state) => state.use.loggedIn);
  const user = useSelector((state) => state.use.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='flex flex-wrap items-center justify-between p-4 w-4/5 ms-auto pe-20'>
        <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          {loggedIn ? (
            <div className='relative'>
              <button
                type='button'
                className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300'
                onClick={() => setShowDropdown(!showDropdown)}>
                <span className='sr-only'>Open user menu</span>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://placehold.co/400'
                  alt='user'
                />
              </button>

              {showDropdown && (
                <div className='absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow z-50'>
                  <div className='px-4 py-3'>
                    <span className='block text-sm text-gray-900'>
                      {user?.username}
                    </span>
                    <span className='block text-sm text-gray-500 truncate'>
                      {user?.email}
                    </span>
                  </div>
                  <ul className='py-2 text-sm text-gray-700'>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogout}
                        className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className='flex gap-4 text-white mb-50'>
              <Link to='/login' className='font-medium'>
                Login
              </Link>
              <Link to='/register' className='font-medium'>
                Sign up
              </Link>
            </div>
          )}

          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-user'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>

        {/* NavItems */}
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-user'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li className='hover:bg-blue-700 rounded-xl'>
              <Link
                to='searchpage'
                className='flex flex-col items-center py-2 px-3 text-white'>
                <BiSolidHotel className='text-2xl' />
                <span className='font-mono'>HOTEL</span>
              </Link>
            </li>
            <li className='hover:bg-blue-700 rounded-xl'>
              <a
                href='#'
                className='flex flex-col items-center py-2 px-3 text-white'>
                <MdVilla className='text-2xl' />
                <span className='font-mono'>VILLA</span>
              </a>
            </li>
            <li className='hover:bg-blue-700 rounded-xl'>
              <a
                href='#'
                className='flex flex-col items-center py-2 px-3 text-white'>
                <RiTaxiFill className='text-2xl' />
                <span className='font-mono'>TAXI</span>
              </a>
            </li>
            <li className='hover:bg-blue-700 rounded-xl'>
              <a
                href='#'
                className='flex flex-col items-center py-2 px-3 text-white'>
                <MdOutlineFlightTakeoff className='text-2xl' />
                <span className='font-mono'>FLIGHTS</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
