"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed lg:top-12 top-40 left-0 w-full bg-white dark:bg-gray-900 z-40">
        {/* Adjusted the top property to 12 to sit below the Top component */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/logo/DrSantoshLogo.png"
              alt="/"
              width={300}
              height={250}
              className=""
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={handleMenuToggle}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 rounded font-semibold text-xl hover:text-[#00867f]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:text-[#00867f] rounded font-semibold text-xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-[#00867f] font-semibold text-xl"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-[#00867f] font-semibold text-xl"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-[#00867f] font-semibold text-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
