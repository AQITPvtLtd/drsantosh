import Image from "next/image";
import React from "react";

const DrSantosh = () => {
  return (
    <div className="py-16 lg:px-12 px-2">
      <div className="lg:p-10 p-8 border-none shadow-custom-inset rounded-3xl">
        <div className="border-solid border-2 border-black rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            <Image
              src="/doctor.png"
              width={500}
              height={500}
              alt="Doctor Image"
              className="rounded-lg shadow-md"
            />
            <h1 className="text-4xl font-bold mt-4 mb-4 text-gray-800 lg:ml-24 lg:text-left">
              Dr. Santosh Ghai
            </h1>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-5 lg:mt-24">
            <h1 className="lg:text-5xl sm:text-3xl text-3xl sm:text-center font-bold mb-4 text-center underline leading-snug lg:text-left font-serif">
              Dr. Santosh Ghai
            </h1>
            <div className="text-lg space-y-2 ">
              <p className="font-semibold text-3xl">
                MBBS, MD – General Medicine
              </p>
              <p className="text-2xl">Internal Medicine</p>
              <p className="text-2xl">General Physician</p>
              <p>11 years of overall experience (9 years as a specialist)</p>

              <div className="mt-10 ">
                <p className="leading-relaxed">
                  Dr. Santosh Ghai specializes in internal medicine and is also
                  a general physician. He has overall experience of 11 years, 6
                  years as a specialist. He is currently practicing at BLK-Max
                  Super Speciality Hospital, New Delhi. He treats COVID
                  symptoms, piles, skin allergies, and diabetes. He is a skilled
                  doctor and has attended many conferences at national and
                  international levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrSantosh;
