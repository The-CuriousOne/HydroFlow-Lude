"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Page() {
  const router = useRouter();

  // State for form inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State for error/success messages
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission using NextAuth signIn
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Call NextAuth's signIn function with "credentials" provider
    const result = await signIn("credentials", {
      redirect: false, // we handle redirection manually
      username: formData.username,
      password: formData.password,
    });

    if (result.error) {
      setMessage(result.error || "Login failed. Please try again.");
    } else {
      localStorage.setItem("username", formData.username)
      setMessage("Login successful!");
      // Optionally, you can refresh session data here or redirect immediately
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-[100vw] pt-[7.5rem] pb-[7.5rem] pl-[5rem] pr-[5rem] flex justify-center items-center bg-[url('/images/signUpBackground.jpg')] bg-cover bg-center">
      <div className="w-[35rem] bg-[#111827] p-[5rem] rounded-[1rem]">
        {/* Header */}
        <div className="w-full mb-[3rem] flex justify-center items-center">
          <h3 className="font-medium text-[36px] text-white">Login</h3>
        </div>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="w-full mt-[1rem] leading-[1.25rem]">
            <label
              htmlFor="username"
              className="block text-[16px] font-light text-[rgba(156,163,175,1)] mb-[5px]"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full rounded-[0.5rem] border border-[rgba(55,65,81,1)] outline-none bg-[#111827] py-[0.75rem] px-[1rem] text-[rgba(243,244,246,1)] focus:border-[rgba(167,139,250)]"
            />
          </div>

          {/* Password Field */}
          <div className="w-full mt-[1rem] leading-[1.25rem]">
            <label
              htmlFor="password"
              className="block text-[16px] font-light text-[rgba(156,163,175,1)] mb-[5px]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-[0.5rem] border border-[rgba(55,65,81,1)] outline-none bg-[#111827] py-[0.75rem] px-[1rem] text-[rgba(243,244,246,1)] focus:border-[rgba(167,139,250)]"
            />
            <div className="flex justify-end text-xs leading-4 text-gray-400 mt-2 mb-[14px]">
              <Link
                href="#"
                className="text-[rgba(243,244,246,1)] text-[14px] no-underline hover:text-[rgba(167,139,250,1)]"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Display Message */}
          <div className="mt-[1rem] w-full h-[1rem]">
            {message && (
              <p
                className={`mt-[1rem] text-center text-sm ${
                  message.includes("successful")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <div className="w-full mt-[3rem]">
            <button
              type="submit"
              disabled={loading}
              className="block w-full h-[3.5rem] bg-[rgba(167,139,250,1)] py-[0.75rem] text-center text-white rounded-[0.375rem] font-medium text-[16px] hover:font-semibold hover:bg-white hover:text-[rgba(167,139,250,1)] hover:border-2 hover:border-[rgba(167,139,250,1)] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Switch to Sign Up */}
        <div className="mt-[3rem] text-center text-[0.75rem] leading-[1rem] text-[rgba(156,163,175,1)]">
          <p>
            Don't have an account?{" "}
            <Link
              href="/sign_up"
              className="no-underline font-normal text-white hover:text-[rgba(167,139,250,1)]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
