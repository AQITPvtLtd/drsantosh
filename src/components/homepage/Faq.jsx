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
      <h1 className="lg:text-7xl font-semibold md:text-5xl sm:text-3xl text-2xl px-20 py-10">
        Frequently <br /> asked questions
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
                The expense windows adapted sir. Wrong widen drawn.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                Six curiosity day assurance bed necessary?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                Produce say the ten moments parties?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                Simple innate summer fat appear basket his desire joy?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                Outward clothes promise at gravity do exited?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
