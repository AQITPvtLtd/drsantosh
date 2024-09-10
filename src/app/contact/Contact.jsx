import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="py-16 bg-white mt-[150px] flex justify-center">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-between w-full">
            {/* Left side: Address, Phone, Email */}
            <div className="flex flex-col space-y-6 mb-8 md:mb-0 w-full md:w-1/2">
              <div className="flex items-center">
                <IoLocationSharp className="text-4xl text-white bg-[#04b67c] p-1 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Our Address</h3>
                  <p className="text-gray-700">
                    JEEWAN HOSPITAL - 2-B, Pusa Road, Next to <br />
                    Karol Bagh, 108, Sadhu Vasvani Marg, <br />
                    opp. Pillar No.-107, Rajinder Nagar, <br />
                    New Delhi, Delhi 11000
                  </p>
                </div>
              </div>

              <Link href="tel:+919999137803" passHref>
                <div className="flex items-center cursor-pointer">
                  <IoCall className="text-4xl text-white bg-[#04b67c] p-1 rounded-full" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone Number</h3>
                    <p className="text-gray-700">+91 9999137803</p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:officialsantoshghai@gmail.com" passHref>
                <div className="flex items-center cursor-pointer">
                  <MdEmail className="text-4xl text-white bg-[#04b67c] p-1 rounded-full" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Address</h3>
                    <p className="text-gray-700">
                      officialsantoshghai@gmail.com
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right side: Contact Form */}
            <div className="flex flex-col space-y-4 w-full md:w-1/2">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
              />
              <textarea
                placeholder="Write your message..."
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] h-32 w-full"
              ></textarea>
              <button className="bg-[#04b67c] text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
