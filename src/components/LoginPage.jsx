import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Tambahkan logika login di sini
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center px-8 lg:px-16 xl:px-24 2xl:px-60 py-8 lg:py-16 xl:py-24 2xl:py-48 overflow-hidden">
      <div className="flex flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 max-w-full">
        {/* Image Section */}
        <div className="flex flex-col justify-start items-start overflow-hidden">
          <img
            className="w-[300px] h-[240px] lg:w-[400px] lg:h-[320px] xl:w-[480px] xl:h-[360px] 2xl:w-[552px] 2xl:h-96 object-cover"
            src="https://placehold.co/552x450"
            alt="Login illustration"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-48 lg:w-56 xl:w-60 2xl:w-64 flex flex-col justify-start items-center gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-3.5"
        >
          {/* Logo */}
          <div className="w-32 h-8 lg:w-36 lg:h-9 xl:w-40 xl:h-10 2xl:w-44 2xl:h-12 relative overflow-hidden">
            <div className="left-[20px] lg:left-[28px] xl:left-[32px] 2xl:left-[39px] top-[2px] absolute justify-start text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal font-['Guttery']">
              Ourstory
            </div>
          </div>

          {/* Form Fields */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 lg:gap-2.5">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 lg:gap-[5px]">
              {/* Username/Email Input */}
              <div className="self-stretch h-7 lg:h-8 xl:h-8 2xl:h-9 px-px bg-neutral-900 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-neutral-600 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
                <input
                  type="text"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleInputChange}
                  placeholder="Username or email"
                  className="w-full h-full p-1.5 lg:p-2 bg-transparent text-white text-xs lg:text-sm xl:text-sm 2xl:text-base font-normal font-['Roboto'] placeholder-neutral-400 outline-none"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="self-stretch h-7 lg:h-8 xl:h-8 2xl:h-9 px-px bg-neutral-900 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-neutral-600 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full h-full p-1.5 lg:p-2 bg-transparent text-white text-xs lg:text-sm xl:text-sm 2xl:text-base font-normal font-['Roboto'] placeholder-neutral-400 outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="self-stretch h-6 lg:h-7 xl:h-7 2xl:h-8 px-8 lg:px-12 xl:px-16 2xl:px-24 bg-sky-500 rounded-[5px] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-sky-600 transition-colors"
            >
              <div className="justify-start text-sky-100 text-xs lg:text-sm xl:text-sm 2xl:text-base font-bold font-['Roboto']">
                Log in
              </div>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="p-2 lg:p-2.5 xl:p-3 2xl:p-3.5 inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-center">
              <span className="text-white text-xs lg:text-sm xl:text-sm 2xl:text-base font-normal font-['Roboto']">
                Don't have an account?{" "}
              </span>
              <span 
                onClick={handleSignUpClick}
                className="text-sky-500 text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold font-['Roboto'] cursor-pointer hover:text-sky-400"
              >
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
