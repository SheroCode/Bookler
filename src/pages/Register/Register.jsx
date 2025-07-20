import { Link } from "react-router-dom";
import blueLogo from "../../assets/images/bluelogo.png";
import bgimage from "../../assets/images/BG.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Register() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* FORM SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 m-auto">
        <form className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-4">
            <img src={blueLogo} alt="logo" className="mx-auto w-32" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-6">SIGNUP</h2>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="User Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required>
              <option value="EG">Egypt</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="123-45-678"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-all my-4">
            Signup
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 font-semibold">
            Login
          </Link>
        </p>

        {/* OR Signup with */}
        <div className="w-full max-w-md mt-8">
          <div className="flex items-center justify-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-600 font-medium">
              <span className="font-bold text-black">Signup</span> with Others
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 mb-4 hover:bg-gray-100 transition-all">
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">
              Signup with <span className="font-bold">Google</span>
            </span>
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 hover:bg-gray-100 transition-all">
            <FaFacebookF size={22} className="text-blue-600" />
            <span className="text-gray-700 font-medium">
              Signup with <span className="font-bold text-black">Facebook</span>
            </span>
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src={bgimage}
          alt="register background"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Register;
