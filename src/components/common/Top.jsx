import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";

const Top = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#00867e]">
        <div className="flex flex-col lg:flex-row items-center py-3">
          <div className="grid lg:grid-cols-12 gap-4 w-full">
            {/* Social Media Icons */}
            <div className="col-span-12 lg:col-start-2 lg:col-span-3">
              <div className="flex justify-evenly lg:justify-start text-4xl lg:gap-4">
                <Link href="https://www.instagram.com/drsantoshghai/" target="__blank">
                  <FaInstagram className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61562238766058" target="__blank">
                  <FaFacebookF className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/" target="__blank">
                  <FaLinkedin className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCueXPbbshhW8VtgU9BoPaqA" target="__blank">
                  <FaYoutube className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-span-12 lg:col-span-3 mt-2 lg:mt-0">
              <div className="flex justify-evenly lg:justify-start text-lg md:text-xl text-white">
                <Link
                  href="tel:+919999137803"
                  className="flex gap-3 items-center"
                  target="__blank"
                >
                  <IoCallSharp className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200 text-4xl" />
                  Call Now +91 9999137803
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="col-span-12 lg:col-span-3 lg:mt-0">
              <div className="flex justify-evenly lg:justify-start text-lg md:text-xl text-white">
                <Link
                  href="mailto:officialsantoshghai@gmail.com"
                  className="flex gap-3 items-center" target="__blank"
                >
                  <IoIosMail className="bg-[#04b67c] text-white p-2 rounded-full hover:scale-110 transition-transform duration-200 text-4xl" />
                  officialsantoshghai@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
