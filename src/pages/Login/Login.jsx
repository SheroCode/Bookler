import { Link } from "react-router-dom";
import bgimage from "../../assets/images/BG.png";
import blueLogo from "../../assets/images/bluelogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" }); // Show error on blur

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* FORM SECTION */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6 m-auto'>
        <form className='w-full max-w-md' onSubmit={handleSubmit(onSubmit)}>
          {/* Logo */}
          <div className='text-center mb-4'>
            <img src={blueLogo} alt='logo' className='mx-auto w-32' />
          </div>

          {/* Heading */}
          <h2 className='text-3xl font-bold text-center mb-6'>LOGIN</h2>

          {/* Email */}
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block mb-1 text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='john.doe@company.com'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <div className='p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50'>
                <span className='font-medium'>{errors.email.message}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-1 text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='•••••••••'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'>
                <span className='font-medium'>{errors.password.message}</span>
              </div>
            )}
          </div>

          {/* Login button */}
          <button
            type='submit'
            className='w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-all mb-4'>
            Login
          </button>
        </form>

        {/* Register prompt */}
        <p className='text-sm text-center'>
          Don’t have an account?{" "}
          <Link to='/register' className='text-blue-700 font-semibold'>
            Register
          </Link>
        </p>

        {/* OR LOGIN WITH */}
        <div className='w-full max-w-md mt-8'>
          <div className='flex items-center justify-center mb-6'>
            <hr className='flex-grow border-gray-300' />
            <span className='px-4 text-gray-600 font-medium'>
              <span className='font-bold text-black'>Login</span> with Others
            </span>
            <hr className='flex-grow border-gray-300' />
          </div>

          {/* Google */}
          <button className='w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 mb-4 hover:bg-gray-100 transition-all'>
            <FcGoogle size={24} />
            <span className='text-gray-700 font-medium'>
              Login with <span className='font-bold'>Google</span>
            </span>
          </button>

          {/* Facebook */}
          <button className='w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 hover:bg-gray-100 transition-all'>
            <FaFacebookF size={22} className='text-blue-600' />
            <span className='text-gray-700 font-medium'>
              Login with <span className='font-bold text-black'>Facebook</span>
            </span>
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className='w-full md:w-1/2 hidden md:block'>
        <img
          src={bgimage}
          alt='login background'
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
}

export default Login;
