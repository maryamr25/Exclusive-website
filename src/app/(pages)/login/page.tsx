
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
     

      <div className="flex flex-wrap mt-6 mb-10 items-center justify-center gap-4">
      <div className="">
            <Image src='/sign.png' alt='' width={600} height={450} className="w-full " />
        </div>
        {/* Card Container */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full  bg-[#DB4444] text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="text-sm text-center text-gray-500 mt-6">
            <p>
              Dont have an account?{" "}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
            <p className="mt-2">
              Forgot your password?{" "}
              <a href="/reset-password" className="text-blue-500 hover:underline">
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
