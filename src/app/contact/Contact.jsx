"use client";
import React from "react";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";
import { form } from "@/services/form";

const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);
    console.log(response);
    if (response.success) {
      Swal.fire({
        title: "Form Submitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div className=" bg-white mt-[200px] flex justify-center">
        <div className="w-full max-w-6xl flex flex-col items-center px-10">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col space-y-6 w-full ">
              <div className="flex items-center">
                <div className="text-4xl">
                  <IoLocationSharp
                    aria-label="Location Icon"
                    className=" text-white p-1 bg-[#04b67c] rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Our Address</h3>
                  <p className="text-gray-700">
                    108 Pillar No. 107, 2-B, Pusa Rd, next to Karol Bagh, Block
                    18 A, Rajinder Place, Karol Bagh, New Delhi, Delhi, 110005
                  </p>
                </div>
              </div>

              <Link href="tel:+919999137803">
                <div className="flex items-center cursor-pointer">
                  <IoCall
                    aria-label="Phone Icon"
                    className="text-4xl text-white bg-[#04b67c] p-1 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone Number</h3>
                    <p className="text-gray-700">+91 9999137803</p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:officialsantoshghai@gmail.com">
                <div className="flex items-center cursor-pointer">
                  <div className="text-4xl">
                    <MdEmail
                      aria-label="Email Icon"
                      className="text-4xl text-white bg-[#04b67c] p-1 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Address</h3>
                    <p className="text-gray-700">
                      officialsantoshghai@gmail.com
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="gap-y-5">
              <div className="py-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="pb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="pb-2">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <input
                    type="text"
                    placeholder="Subject"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
                    required
                  /> */}
              <div className="pb-2">
                <textarea
                  placeholder="Write your message..."
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] h-32 w-full"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="bg-[#04b67c] text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
                Send Message
              </button>
            </form>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92268.49203752162!2d77.04189618800226!3d28.73951932841455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd209d53079b%3A0x4498aadd3d84e14f!2sDr%20Santosh%20Ghai%20%7C%20Best%20General%20Physician%20in%20Karol%20Bagh%20%7C%20General%20Physician%20in%20New%20Delhi!5e1!3m2!1sen!2sin!4v1726227931921!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
