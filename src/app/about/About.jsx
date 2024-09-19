import React from "react";
import Image from "next/image";
import DrSantosh from "@/components/homepage/DrSantosh";
const About = () => {
  return (
    <div className="mt-[125px]">
      <div className="relative">
        <Image
          src="/About/about.png"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#04b67c] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          About Us
        </h1>
      </div>

      <DrSantosh />

      {/* Qualifications */}
      <div className="lg:grid grid-cols-12 md:gap-40">
        <div className="col-start-2 col-span-4 sm:p-3 lg:p-0 p-2">
          <div className="bg-[#00867e] p-2 rounded-xl">
            <Image
              src="/About/qualification1.png"
              width={500}
              height={600}
              alt="Vision Image"
              className="rounded-lg -translate-x-4 -translate-y-4"
            />
          </div>
        </div>
        <div className="col-span-4">
          <h1 className="font-bold text-4xl text-center text-[#04b67c] sm:mt-5 lg:mt-0">
            Qualification
          </h1>

          <div className="space-y-7">
            <p className="rounded-3xl shadow-2xl p-5">
              MBBS - Rajiv Gandhi University Of Health Sciences, Karnataka, 2006
            </p>
            <p className="rounded-3xl shadow-2xl p-5">
              MD - General Medicine - H.I.H.T. University, Derahdun, 2013
            </p>
          </div>
        </div>
      </div>
      {/* Our Vision */}
      <div className="mt-10">
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center"
          // style={{ backgroundImage: "url(/about/visionbgimg.png)" }}
        >
          <div className="lg:grid lg:grid-cols-12 relative items-center justify-between w-full h-full p-8 text-center bg-yellow-500 bg-opacity-50">
            <div className="col-span-7">
              <h1 className="text-center text-[#04b67c] font-semibold text-5xl py-3">
                Our Vision
              </h1>
              <h2 className="text-black text-center font-semibold text-lg md:text-xl lg:text-2xl max-w-prose lg:max-w-none ">
                Our vision is to become more than just a healthcare provider—we
                aim to be a trusted partner in our patients' lives. We see a
                future where healthcare is about building strong, lasting
                relationships with our community, helping people take charge of
                their health and wellness. By embracing both cutting-edge
                medicine and a human-centered approach, we aspire to create an
                environment where every patient feels supported, understood, and
                empowered to lead a healthier life.
              </h2>
            </div>

            <div className="col-span-5 flex justify-center lg:justify-start">
              <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0">
                <Image
                  src="/About/vision.png"
                  width={700}
                  height={700}
                  alt="Vision Image"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our mission */}
      <div className="mt-10">
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center"
          // style={{ backgroundImage: "url(/about/img.jpeg)" }}
        >
          <div className="lg:grid lg:grid-cols-12 relative items-center justify-between w-full h-full p-8 text-center bg-yellow-500 bg-opacity-50 flex flex-col-reverse">
            <div className="col-span-5 flex justify-center lg:justify-end">
              <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0">
                <Image
                  src="/About/mission.png"
                  width={700}
                  height={700}
                  alt="Mission Image"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="col-span-7 text-center">
              <h1 className="text-center text-[#04b67c] font-semibold text-5xl py-3">
                Our Mission
              </h1>
              <h2 className="text-black text-center font-semibold text-lg md:text-xl lg:text-2xl max-w-prose lg:max-w-none">
                We believe in providing care that goes beyond just treating
                illnesses. Our mission is to offer compassionate,
                patient-centered healthcare that supports not only the physical
                but also the emotional well-being of every individual. By
                focusing on prevention, early diagnosis, and effective
                treatment, we aim to enhance the quality of life for our
                patients. Every person is unique, and so is their health
                journey—our commitment is to deliver personalized care that
                reflects this, built on trust, respect, and the latest in
                medical research and practice.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
