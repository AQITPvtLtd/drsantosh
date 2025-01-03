import React from "react";
import Image from "next/image";
import { HiDocumentPlus } from "react-icons/hi2";
import { FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Form from "@/app/contact/form/Form";

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
          className="hidden lg:block"
        />
      </div>

      {/* Main Content */}
      <div className="relative justify-center py-12 px-4 lg:mt-14">
        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl font-bold text-[#07a496] text-center">
          Book Your Consultation
        </h1>

        <div className="lg:grid grid-cols-12">
          <div className="col-start-4 col-span-6">
            <Form />
          </div>
        </div>
        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center text-center md:ml-36 ml-0 gap-6 w-full max-w-screen-lg mt-10">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <HiDocumentPlus className="text-4xl text-blue-600" />
            <h2 className="text-xl font-semibold mt-4 underline">
              Diagnostic Services
            </h2>
            <p className="text-gray-600 text-center">
              Determining the nature & cause of a condition, illness, or injury
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <FaAmbulance className="text-4xl text-blue-600" />
            <h2 className="text-xl font-semibold mt-4 underline">
              Accidents, Emergency & EMS
            </h2>
            <p className="text-gray-600 text-center">With High-End Equipment</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <FaUserDoctor className="text-4xl text-blue-600" />
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
