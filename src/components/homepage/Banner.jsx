"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-cover mt-20 lg:mt-40">
      <div className="absolute inset-0">
        <Image
          src="/Banner/new.jpg"
          alt="Slider Image"
          layout="fill"
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>

      <div className="absolute text-start px-6 bg-opacity-50 sm:mt-[30rem] lg:mt-16 mt-72">
        <div className="">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold py-2 line-clamp-3 leading-relaxed lg:leading-snug">
            We Can Help You Get <br className="hidden lg:block" /> Better &
            Regain Your <br className="hidden lg:block" /> Health
          </h1>

          <h1 className="text-xl lg:text-4xl font-semibold py-2">
            Internal Medicine & General Physician
          </h1>

          <h3 className="text-sm lg:text-base max-w-lg py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
        </div>

        <Link href="/contactus">
          <button className="bg-[#00867f] text-white font-bold py-2 px-4 text-xl lg:text-3xl rounded-full shadow-md transition duration-300 ease-in-out mt-4">
            Call Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
