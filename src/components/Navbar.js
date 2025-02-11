"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = ({ show }) => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load user data from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error("Failed to parse stored user:", error);
          setUser(null);
        }
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!show) {
      setMobileMenuOpen(false);
    }
  }, [show]);

  return (
    <div
      className={`fixed top-0 left-0 w-full max-w-full h-[6.5rem] bg-[#122A2C] flex justify-between items-center text-white text-[1.5rem] font-light px-10 transition-transform duration-500 z-[1000] ${
        !show ? "-translate-y-full" : ""
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center">
        <Link href="/" className="text-white text-[1.5rem] font-normal">
          <h3>HydroFlow Lude</h3>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex justify-end items-center w-1/2 transition-all duration-500">
        {/* Desktop Menu */}
        <ul className="hidden md:flex w-full justify-between list-none">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-white">
              Contact Us
            </Link>
          </li>
          <li className="flex items-center">
            <Link href={user ? "/sign_up" : "/sign_up"} className="flex items-center">
              <Image
                src="/images/navbar/profile_user.png"
                alt="Profile"
                width={30}
                height={30}
                className="mr-3 w-8 h-8"
              />
              {user ? <span>{user.username}</span> : <span>Sign In</span>}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <IoMenu
          className="md:hidden w-8 h-8 cursor-pointer transition-opacity duration-300 opacity-100"
          onClick={toggleMobileMenu}
        />
        <ul
          className={`fixed top-0 right-0 w-full h-screen bg-[#131010] flex flex-col items-end p-10 text-white transition-transform duration-500 transform ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          }`}
        >
          <IoClose
            className="w-8 h-8 cursor-pointer fixed right-10 top-10"
            onClick={toggleMobileMenu}
          />
          <li className="w-full flex flex-col items-center justify-center h-[15rem]">
            <Link
              href={user ? "/sign_up" : "/sign_up"}
              onClick={toggleMobileMenu}
              className="flex flex-col items-center"
            >
              <Image
                src="/images/navbar/profile_user.png"
                alt="Profile"
                width={50}
                height={50}
                className="w-16 h-16 my-8"
              />
              <span>{user ? user.username : "Sign In"}</span>
            </Link>
          </li>
          <li className="w-full h-16 flex justify-end border-b border-gray-600">
            <Link
              href="/"
              className="text-white w-full flex items-center"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="w-full h-16 flex justify-end border-b border-gray-600">
            <Link
              href="/dashboard"
              className="text-white w-full flex items-center"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li className="w-full h-16 flex justify-end border-b border-gray-600">
            <Link
              href="/about"
              className="text-white w-full flex items-center"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="w-full h-16 flex justify-end border-b border-gray-600">
            <Link
              href="/contacts"
              className="text-white w-full flex items-center"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
