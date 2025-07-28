import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
// import { addBooking } from "../../store/bookingSlice";
import PayNowButton from "../Buttons/PayNowButton";
import Popup from "../Popup/Popup";

function BookingFormCard({
  hotel,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  totalDays,
  totalPrice,
}) {
  console.log({ hotel });
    const pricePerNight = hotel?.pricing?.[0]?.discountedPrice || 0;

  const { user } = useSelector((state) => state.use);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);


  const onSubmit = () => {
    if (!fromDate || !toDate || totalDays <= 0) {
      alert("Please select a valid date range.");
      return;
    }
//     const bookingDetails = {
//       hotel: {
//         name: hotel.name,
//         image: hotel.images.main,
//         city: hotel.city,
//         rating: hotel.rating,
//         description: hotel.description,
//         price: hotel.pricing[0].discountedPrice
// ,
//       },
//       fromDate,
//       toDate,
//       totalDays,
//       totalPrice,
//     };

    setShowSuccess(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white rounded-xl shadow p-6 w-full max-w-3xl'>
      <h2 className='text-xl font-bold mb-1'>Your Details</h2>
      <p className='text-sm text-gray-500 mb-6'>
        Book now and enjoy your stay.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold '>Title</label>
          <select
            {...register("title", { required: true })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md border-gray-300'>
            <option value='Mr'>Mr</option>
            <option value='Mrs'>Mrs</option>
          </select>
          {errors.title && (
            <p className='text-red-500 text-xs'>Title is required</p>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>First Name</label>
          <input
            defaultValue={user?.firstName}
            {...register("firstName", { required: "First name is required" })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {/* error message */}
          {errors.firstName && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>{errors.firstName.message}</span>
            </div>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>Last Name</label>
          <input
            defaultValue={user?.lastName}
            {...register("lastName", { required: "Last name is required" })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {/* error message */}
          {errors.lastName && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>{errors.lastName.message}</span>
            </div>
          )}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold'>Email</label>
          <input
            defaultValue={user?.email}
            {...register("email", { required: "Email is required" })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {/* error message */}
          {errors.email && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>{errors.email.message}</span>
            </div>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>Mobile</label>
          <input
            {...register("mobile", { required: "Mobile is required" })}
            placeholder='+20 000 0000 000'
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {/* error message */}
          {errors.mobile && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>{errors.mobile.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold mx-3'>From Date</label>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            selectsStart
            startDate={fromDate}
            endDate={toDate}
            className='w-full bg-gray-100 px-4 py-2 rounded-md border-gray-300'
            placeholderText='Select start date'
          />
        </div>
        <div>
          <label className='text-sm font-semibold me-3'>To Date</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            selectsEnd
            startDate={fromDate}
            endDate={toDate}
            minDate={fromDate}
            className='w-full bg-gray-100 px-4 py-2 rounded-md border-gray-300'
            placeholderText='Select end date'
          />
        </div>
      </div>

      {/* Payment */}
      <hr className='my-6' />
      <h2 className='text-xl font-bold mb-4'>Payment Details</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold'>Card Number</label>
          <input
            {...register("cardNumber", {
              required: true,
              pattern: /^[0-9]{16}$/,
            })}
            placeholder='1234 5678 9012 3456'
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.cardNumber && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>
                Valid 16-digit card number required
              </span>
            </div>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>CVV</label>
          <input
            {...register("cvv", {
              required: true,
              pattern: /^[0-9]{3}$/,
            })}
            placeholder='123'
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.cvv && (
            <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
              <span className='font-medium'>Valid 3-digit CVV required</span>
            </div>
          )}
        </div>
      </div>

      <div className='mb-6'>
        <label className='text-sm font-semibold'>Card Holder</label>
        <input
          {...register("cardHolder", { required: "Card holder name required" })}
          placeholder='Ahmed Mohamed'
          className='w-full bg-gray-100 px-4 py-2 rounded-md'
        />
        {/* error message */}
        {errors.cardHolder && (
          <div className='p-2 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
            <span className='font-medium'>{errors.cardHolder.message}</span>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className='mb-6 text-sm font-medium text-gray-800'>
        <p className="mb-2">Price per night: ${pricePerNight}</p>
        <p className="mb-2">Total days: {totalDays}</p>
        <p className='text-lg mt-1 text-grey-600'>Total Price: ${totalPrice}</p>
      </div>
      <PayNowButton hotel={hotel} fromDate={fromDate} toDate={toDate} />
      {showSuccess && <Popup onClose={() => setShowSuccess(false)} />}
    </form>
  );
}

export default BookingFormCard;
