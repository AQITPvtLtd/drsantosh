import React from "react";
import Image from "next/image";
import { service } from "@/data/service";
const Services = () => {
  return (
    <div className="mt-[150px]">
      <div className="relative">
        <Image
          src="/Blog/serviceimg.png"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="service Image"
        />
        <div className="absolute inset-0 bg-[#04b67c] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Our Services
        </h1>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {service.slice(0, 6).map((service) => (
          <div
            key={service.id}
            className="flex flex-col sm:flex-row items-start border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 dark:border-white dark:bg-white"
          >
            {/* Left Side Image */}
            <div className="relative w-full sm:w-1/3 h-48">
              <Image
                src={service.image}
                alt={service.heading}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col p-4 w-full sm:w-2/3">
              {/* Heading */}
              <h5 className="text-xl font-semibold dark:text-[#04b67c] mb-2 text-[#04b67c]">
                {service.heading}
              </h5>

              {/* Content */}
              <p className="text-gray-700">{service.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:grid grid-cols-12 p-8">
        <div className="col-start-4 col-span-5">
          {service.slice(6, 7).map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row items-start border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 dark:border-white dark:bg-white"
            >
              {/* Left Side Image */}
              <div className="relative w-full sm:w-1/3 h-48">
                <Image
                  src={service.image}
                  alt={service.heading}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Right Side Content */}
              <div className="flex flex-col p-4 w-full sm:w-2/3">
                {/* Heading */}
                <h5 className="text-xl font-semibold dark:text-[#04b67c] mb-2 text-[#04b67c]">
                  {service.heading}
                </h5>

                {/* Content */}
                <p className="text-gray-700">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
