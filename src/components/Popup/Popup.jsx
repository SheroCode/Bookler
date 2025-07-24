import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Popup({ onClose }) {
  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-50   flex items-center justify-center'
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
      <div className='bg-white w-full max-w-md p-8 rounded-xl shadow-lg text-center relative'>
        <FaCheckCircle className='text-green-500 text-6xl mx-auto mb-4' />
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Booking Success
        </h2>
        <Link
          to='/mybooking'
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md'>
          VIEW ALL BOOKINGS
        </Link>
      </div>
    </div>
  );
}

export default Popup;
