import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Image (1).png";
import { TbParkingCircle } from "react-icons/tb";
import { IoIosWifi } from "react-icons/io";
function HotelCard() {
  return (
    <>
      <a className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 '>
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src={img}
          alt
        />

        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-lg font-bold  text-gray-900 '>
            Noteworthy technology acquisitions
          </h5>
          <p className='mb-3 font-normal text-gray-700 '>
            Near railway station, Shirdi
          </p>
          {/* PARKING & WIFI */}
          <div className='flex w-1/2 justify-between  text-gray-500 font-normal text-md'>
            <div className='flex items-center  '>
              <TbParkingCircle />{" "}
              <span className='ms-1 text-gray-500'>Parking</span>
            </div>
            <div className='flex items-center '>
              <IoIosWifi />
              <span className='ms-1'>Wifi</span>{" "}
            </div>
          </div>
          <div className='flex  items-center justify-between  text-gray-500 font-normal text-md mt-3'>
            <p className="text-amber-300 font-medium">25%off</p>
            <p>$473</p>
            <button
              type='button'
              class='p-2  text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg   hover:bg-gray-100  '>
              Alternative
            </button>
            <button
              type='button'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2   focus:outline-none '>
              Default
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

export default HotelCard;
