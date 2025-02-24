"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { form } from "@/services/form";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    MedicalReport: null,
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };


  const haldleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire({
          icon: "warning",
          title: "File Too Large",
          text: "Please upload a file smaller than 10MB.",
        });
        e.target.value = "";
        return;
      }
      setformData({ ...formData, MedicalReport: file })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("message", formData.message);

    if (formData.MedicalReport) {
      formDataToSend.append("MedicalReport", formData.MedicalReport);
    }

    try {
      const response = await form(formDataToSend);
      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "You clicked the button!",
          icon: "success",
        });
        setformData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          MedicalReport: null,
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit the form. Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#07a496] text-center">
        Submit Your Query
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="py-1">
          <label
            htmlFor="name"
            className="block text-md font-medium mb-1 text-primary">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Full name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pb-1">
          <label
            htmlFor="email"
            className="block text-md font-medium mb-1 text-primary">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Your email address"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pb-1">
          <label
            htmlFor="phone"
            className="block text-md font-medium mb-1 text-primary">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pb-1">
          <label
            htmlFor="location"
            className="block text-md font-medium mb-1 text-primary">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter Your Current Location"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pb-1">
          <label
            htmlFor="message"
            className="block text-md font-medium mb-1 text-primary">
            Write Problem English / Hindi
          </label>
          <textarea
            placeholder="Describe Health Problem..."
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] h-32 w-full"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="pb-2">
          <label
            htmlFor="MedicalReport"
            className="block text-md font-medium mb-1 text-primary">
            Upload Medical Report (Optional)
          </label>
          <input
            type="file"
            id="MedicalReport"
            name="MedicalReport"
            accept=".pdf, .doc, .docx, .xls, xlsx, .txt, .jpg, .png, .jpeg, .avif"
            className="border bg-white border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#04b67c] w-full"
            onChange={haldleFileChange}
          />
        </div>

        <div>
          {
            loading ? (<div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
              <ClipLoader width="60" height="60" color="#092644" className="animate-spin" />
            </div>) : (<button className="bg-[#07a496] p-3 text-white rounded-xl hover:font-semibold">
              Send Message
            </button>)
          }
        </div>

      </form>
    </div>
  );
};

export default Form;
