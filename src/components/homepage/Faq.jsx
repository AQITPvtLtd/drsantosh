"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="lg:text-6xl font-semibold md:text-5xl text-3xl lg:px-20 px-10 lg:py-10 py-5 text-[#07a496]">
        Frequently <br className="lg:block hidden" /> asked questions
        <hr
          style={{
            height: "3px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "black",
            width: "40%",
            margin: "10px 0 0 0",
          }}
        />
      </h1>

      <div id="accordion-collapse" className="lg:px-20 px-14 gap-20">
        {/* First Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span className="font-semibold lg:text-xl">
                Who is Dr. Santosh Ghai?
              </span>
              <IoMdAdd className="w-12 h-12 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeIndex === 1 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Dr. Santosh Ghai is a dynamic and skilled medical practitioner
                who is currently working as a Consultant in the Department of
                General Medicine at BLK Super Speciality Hospital New Delhi. He
                has nearly 11 years of experience in the field of Internal
                Medicine. Dr. Santosh Ghai has studied MBBS from a prestigious
                institute. He has attended several conferences at national and
                international level.
              </p>
            </div>
          </div>
        </div>

        {/* Second Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span className="font-semibold lg:text-xl">
                Why do patients visit Dr. Santosh Ghai?
              </span>
              <IoMdAdd className="w-12 h-12 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`${activeIndex === 2 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Patients frequently visit Dr. Santosh Ghai for Diabetes,
                Hypertension, Headaches, Anemia, Kidney Disease, Thyroid and
                Liver Disease.
              </p>
            </div>
          </div>
        </div>

        {/* Third Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-semibold lg:text-xl">
                What is Dr. Santosh Ghai's education qualification?
              </span>
              <IoMdAdd className="w-12 h-12 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`${activeIndex === 3 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Dr. Santosh Ghai has the following qualifications - MBBS, MD -
                General Medicine.
              </p>
            </div>
          </div>
        </div>

        {/* Forth Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="accordion-collapse-body-4"
            >
              <span className="font-semibold lg:text-xl">
                What does Dr. Santosh Ghai specialises in ?
              </span>
              <IoMdAdd className="w-12 h-12 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className={`${activeIndex === 4 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Dr. Santosh Ghai specialises as Internal Medicine, General
                Physician.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Accordion Item */}
        <div className="border border-black mb-4">
          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border-b border-black border-t-0 gap-3"
              onClick={() => toggleAccordion(5)}
              aria-expanded={activeIndex === 5}
              aria-controls="accordion-collapse-body-5"
            >
              <span className="font-semibold lg:text-xl">
                How many years of experience does Dr. Santosh Ghai have?
              </span>
              <IoMdAdd className="w-12 h-12 text-black" />
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className={`${activeIndex === 5 ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5 border-x-1 border-black">
              <p className="mb-2">
                Dr. Santosh Ghai has an overall experience of 11 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
