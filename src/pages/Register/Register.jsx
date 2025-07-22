import { Link, useNavigate } from "react-router-dom";
import blueLogo from "../../assets/images/bluelogo.png";
import bgimage from "../../assets/images/BG.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // show error after touch (onBlur)
  });

  const password = watch("password");

  let navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log("Register Data:", data);
    navigate("/login");
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* FORM SECTION */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md'>
          {/* Logo */}
          <div className='text-center mb-4'>
            <img src={blueLogo} alt='logo' className='mx-auto w-32' />
          </div>

          <h2 className='text-3xl font-bold text-center mb-6'>SIGNUP</h2>

          {/* Name */}
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type='text'
              id='name'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'
              placeholder='User Name'
            />
            {errors.name && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>{errors.name.message}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Email address
            </label>
            <input
              type='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              id='email'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'
              placeholder='john.doe@company.com'
            />
            {errors.email && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>{errors.email.message}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                  message:
                    "Password must include a capital letter, number, and special character",
                },
              })}
              id='password'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'
              placeholder='•••••••••'
            />
            {errors.password && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>{errors.password.message}</span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className='mb-4'>
            <label
              htmlFor='confirm_password'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Confirm Password
            </label>
            <input
              type='password'
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              id='confirmPassword'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'
              placeholder='•••••••••'
            />
            {errors.confirmPassword && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>
                  {errors.confirmPassword.message}
                </span>
              </div>
            )}
          </div>

          {/* Country */}
          <div className='mb-4'>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Country
            </label>
            <select
              id='country'
              {...register("country", { required: "Country is required" })}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'>
              <option value=''>Select Country</option>
              <option value='EG'>Egypt</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
            {errors.country && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>{errors.country.message}</span>
              </div>
            )}
          </div>

          {/* Phone */}
          <div className='mb-4'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Phone number
            </label>
            <input
              type='tel'
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{8,15}$/,
                  message: "Invalid phone number format",
                },
              })}
              id='phone'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500'
              placeholder='123456789'
            />
            {errors.phone && (
              <div
                className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
                role='alert'>
                <span className='font-medium'>{errors.phone.message}</span>
              </div>
            )}
          </div>

          {/* Signup Button */}
          <button
            type='submit'
            className='w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-all my-4'>
            Signup
          </button>
        </form>

        {/* Already have account */}
        <p className='text-sm text-center'>
          Already have an account?{" "}
          <Link to='/login' className='text-blue-700 font-semibold'>
            Login
          </Link>
        </p>

        {/* OR Signup with */}
        <div className='w-full max-w-md mt-8'>
          <div className='flex items-center justify-center mb-6'>
            <hr className='flex-grow border-gray-300' />
            <span className='px-4 text-gray-600 font-medium'>
              <span className='font-bold text-black'>Signup</span> with Others
            </span>
            <hr className='flex-grow border-gray-300' />
          </div>

          {/* Google */}
          <button className='w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 mb-4 hover:bg-gray-100 transition-all'>
            <FcGoogle size={24} />
            <span className='text-gray-700 font-medium'>
              Signup with <span className='font-bold'>Google</span>
            </span>
          </button>

          {/* Facebook */}
          <button className='w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 hover:bg-gray-100 transition-all'>
            <FaFacebookF size={22} className='text-blue-600' />
            <span className='text-gray-700 font-medium'>
              Signup with <span className='font-bold text-black'>Facebook</span>
            </span>
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className='w-full h-9/10 md:w-1/2 hidden md:block'>
        <img src={bgimage} alt='register background' className=' object-fit' />
      </div>
    </div>
  );
}

export default Register;
