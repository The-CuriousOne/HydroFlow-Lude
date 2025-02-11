"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // Refs for form inputs to prevent unnecessary re-renders
  const fullNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // State only for relevant changes
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Collect values from refs
    const formData = {
      fullName: fullNameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage((prev) => (prev !== data.error ? data.error : prev));
      } else {
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[100vw] pt-[7.5rem] pb-[7.5rem] pl-[5rem] pr-[5rem] flex justify-center items-center bg-[url('/images/signUpBackground.jpg')] bg-cover bg-center">
      <div className="w-[35rem] bg-[#111827] p-[5rem] rounded-[1rem]">
        {/* Header */}
        <div className="w-full mb-[3rem] flex justify-center items-center">
          <h3 className="font-medium text-[36px] text-white">Sign Up</h3>
        </div>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="w-full mt-[1rem] leading-[1.25rem]">
            <label
              htmlFor="fullName"
              className="block text-[16px] font-light text-[rgba(156,163,175,1)] mb-[5px]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              ref={fullNameRef}
              required
              className="w-full rounded-[0.5rem] border border-[rgba(55,65,81,1)] outline-none bg-[#111827] py-[0.75rem] px-[1rem] text-[rgba(243,244,246,1)] focus:border-[rgba(167,139,250)]"
            />
          </div>

          {/* Email Field */}
          <div className="w-full mt-[1rem] leading-[1.25rem]">
            <label
              htmlFor="email"
              className="block text-[16px] font-light text-[rgba(156,163,175,1)] mb-[5px]"
            >
              Email Id
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              required
              className="w-full rounded-[0.5rem] border border-[rgba(55,65,81,1)] outline-none bg-[#111827] py-[0.75rem] px-[1rem] text-[rgba(243,244,246,1)] focus:border-[rgba(167,139,250)]"
            />
          </div>

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
              ref={usernameRef}
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
              ref={passwordRef}
              required
              className="w-full rounded-[0.5rem] border border-[rgba(55,65,81,1)] outline-none bg-[#111827] py-[0.75rem] px-[1rem] text-[rgba(243,244,246,1)] focus:border-[rgba(167,139,250)]"
            />
          </div>

          {/* Display Message */}
          <div className="mt-[1rem] w-full h-[1rem]">
            {message && (
              <p
                className={` text-center text-sm ${
                  message.includes("success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <div className="w-full mt-[3rem]">
            <button
              type="submit"
              disabled={loading}
              className="block w-full h-[3.5rem] bg-[rgba(167,139,250,1)] py-[0.75rem] text-center text-white rounded-[0.375rem] font-medium text-[16px] hover:font-semibold hover:bg-white hover:text-[rgba(167,139,250,1)] hover:border-2 hover:border-[rgba(167,139,250,1)] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Switch to Login */}
        <div className="mt-[3rem] text-center text-[0.75rem] leading-[1rem] text-[rgba(156,163,175,1)]">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="no-underline font-normal text-white hover:text-[rgba(167,139,250,1)]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
