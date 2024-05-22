// pages/login.js
import { Button } from "@/components/shares/button"; // Adjust the import path as needed
import logo from '/public/images/logo-slog-hor.png'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Colored rectangle and logo */}
      <div className="flex items-center justify-center w-1/2 bg-blue-2">
        <div className="text-white text-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="rounded-lg h-full" />
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex items-center justify-center w-1/2 p-12">
        <div className="text-main-text text-left"> {/* Align text left */}
          <div className="semibold-64 mb-0">🔒 Log In</div> {/* Reduced mb-8 to mb-0 */}
          <p className="regular-18 mb-8">Enter your credentials to access your account.</p> {/* Increased mb-0 to mb-4 */}
          
          {/* Form */}
          <form className="flex flex-col space-y-4 mt-4"> {/* Removed mb-8 from the form */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" required className="mt-1 block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="flex justify-center">
              <Button linkPage="/home" title="Log In" type="small" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}







