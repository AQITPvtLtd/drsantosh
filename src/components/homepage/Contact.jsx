import React from "react";
import Image from "next/image";
import { HiDocumentPlus } from "react-icons/hi2";
import { FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact/cont.avif"
          alt="Slider Image"
          layout="fill"
          style={{ objectFit: "cover" }}
          className="w-full h-full sm:hidden md:hidden lg:block"
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center bg-opacity-90 lg:mt-14 mt-10 py-12 px-4">
        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center">
          Get Book Your Consultation
        </h1>

        {/* Input fields and button */}
        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 py-4 bg-white rounded-2xl p-8 shadow-lg max-w-screen-md w-full">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-full"
          />
          <button className="px-6 bg-blue-600 text-white rounded-full font-semibold py-2 w-full sm:w-auto">
            Book An Appointment
          </button>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mt-10 px-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-blue-600">
              <HiDocumentPlus className="text-4xl" />
            </div>
            <h2 className="text-xl font-semibold mt-4 underline">
              Diagnostic Services
            </h2>
            <p className="text-gray-600 text-center">
              Determining the nature & cause of a condition, illness, or injury
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-blue-600">
              <FaAmbulance className="text-4xl" />
            </div>
            <h2 className="text-xl font-semibold mt-4 underline">
              Accidents, Emergency & EMS
            </h2>
            <p className="text-gray-600 text-center">With High-End Equipment</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-blue-600">
              <FaUserDoctor className="text-4xl" />
            </div>
            <h2 className="text-xl font-semibold mt-4 underline">
              Inpatient Facilities
            </h2>
            <p className="text-gray-600 text-center">
              Providing an Exceptional Patient Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
