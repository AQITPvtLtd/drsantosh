"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { form } from "@/services/form";

const Form = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
        <div className="pb-2">
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="pb-2">
          <textarea
            placeholder="Write your message..."
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] h-32 w-full"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="bg-[#07a496] p-3 text-white rounded-xl hover:font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
