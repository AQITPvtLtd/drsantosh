import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Link from "next/link";
const Top = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex flex-col lg:flex-row mt-4 items-center">
          <div className="grid lg:grid-cols-12 gap-4 w-full">
            <div className="col-span-12 lg:col-start-2 lg:col-span-3">
              <div className="flex justify-center lg:justify-start text-3xl gap-2">
                <Link href="/">
                  <FaInstagram className="bg-[#04b67c] text-white p-1" />
                </Link>
                <Link href="/">
                  <FaFacebookF className="bg-[#04b67c] text-white p-1" />
                </Link>
                <Link href="/">
                  <FaLinkedin className="bg-[#04b67c] text-white p-1" />
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-start">
              <p className="text-center lg:text-left">
                Our customers says{" "}
                <span className="font-semibold text-3xl">Excellent</span>
              </p>
            </div>

            <div className="col-span-12 lg:col-span-2 flex justify-center lg:justify-start">
              <div>
                <div className="flex items-center justify-center lg:justify-start">
                  <MdStar className="text-3xl text-[#04b67c]" />
                  <p className="font-semibold text-xl">Trustpilot</p>
                </div>
                <div className="flex gap-1 justify-center lg:justify-start mt-1 ml-4">
                  <MdStar className="bg-[#04b67c] text-white" />
                  <MdStar className="bg-[#04b67c] text-white" />
                  <MdStar className="bg-[#04b67c] text-white" />
                  <MdStar className="bg-[#04b67c] text-white" />
                  <FaRegStarHalfStroke className="bg-[#04b67c] text-white" />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-start">
              <p className="text-center lg:text-left md:mt-3">
                4.5 Out of 5 based on{" "}
                <span className="font-semibold">1,200 reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
