import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { differenceInDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingFormCard() {
  const { user } = useSelector((state) => state.use);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const pricePerNight = 500;
  const totalDays = fromDate && toDate ? differenceInDays(toDate, fromDate) : 0;
  const totalPrice = totalDays > 0 ? totalDays * pricePerNight : 0;

  const onSubmit = (data) => {
    if (!fromDate || !toDate || totalDays <= 0) {
      alert("Please select a valid date range.");
      return;
    }
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
          <label className='text-sm font-semibold'>Title</label>
          <select
            {...register("title", { required: true })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'>
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
            {...register("firstName", { required: true })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.firstName && (
            <p className='text-red-500 text-xs'>First name is required</p>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>Last Name</label>
          <input
            defaultValue={user?.lastName}
            {...register("lastName", { required: true })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.lastName && (
            <p className='text-red-500 text-xs'>Last name is required</p>
          )}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold'>Email</label>
          <input
            defaultValue={user?.email}
            {...register("email", { required: true })}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.email && (
            <p className='text-red-500 text-xs'>Email is required</p>
          )}
        </div>

        <div>
          <label className='text-sm font-semibold'>Mobile</label>
          <input
            {...register("mobile", { required: true })}
            placeholder='+20 000 0000 000'
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
          />
          {errors.mobile && (
            <p className='text-red-500 text-xs'>Mobile is required</p>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold'>From Date</label>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            selectsStart
            startDate={fromDate}
            endDate={toDate}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
            placeholderText='Select start date'
          />
        </div>
        <div>
          <label className='text-sm font-semibold'>To Date</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            selectsEnd
            startDate={fromDate}
            endDate={toDate}
            minDate={fromDate}
            className='w-full bg-gray-100 px-4 py-2 rounded-md'
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
            <p className='text-red-500 text-xs'>
              Valid 16-digit card number required
            </p>
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
            <p className='text-red-500 text-xs'>Valid 3-digit CVV required</p>
          )}
        </div>
      </div>

      <div className='mb-6'>
        <label className='text-sm font-semibold'>Card Holder</label>
        <input
          {...register("cardHolder", { required: true })}
          placeholder='Ahmed Mohamed'
          className='w-full bg-gray-100 px-4 py-2 rounded-md'
        />
        {errors.cardHolder && (
          <p className='text-red-500 text-xs'>Card holder name required</p>
        )}
      </div>

      {/* Summary */}
      <div className='mb-6 text-sm font-medium text-gray-800'>
        <p>Price per night: ${pricePerNight}</p>
        <p>Total days: {totalDays}</p>
        <p className='text-lg mt-1'>Total Price: ${totalPrice}</p>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold'>
        PAY NOW
      </button>

      {showSuccess && (
        <div className='mt-4 bg-green-100 text-green-700 p-4 rounded'>
          🎉 Booking successful!
        </div>
      )}
    </form>
  );
}

export default BookingFormCard;
