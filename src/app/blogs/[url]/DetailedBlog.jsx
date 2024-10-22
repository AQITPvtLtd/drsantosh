"use client";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlog";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../Sidebar";
import Moment from "react-moment";

const DetailedBlog = ({ url }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const obj = blogs.find((item) => item.url === url);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        if (response?.results) {
          setBlogs(response.results);
        } else {
          throw new Error(response?.message || "Invalid response structure");
        }
      } catch (error) {
        setError(error.message || "Error fetching blogs");
      }
    }
    fetchBlogs();
  }, [url]); // Added url as dependency

  return (
    <div className="sm:mt-[75px] lg:mt-[100px] mt-[75px] sm:px-6">
      {/* Header Section */}
      <div className="relative mb-10">
        <Image
          src="/Blog/blog.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Blog Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Blogs
        </h1>
      </div>

      {/* Display Error if exists */}
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      {/* Blog List and Sidebar */}
      <div className="lg:grid grid-cols-12 p-5 gap-8">
        <div className="col-start-1 col-span-9">
          {obj ? (
            <li
              key={obj.url}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl mb-6"
            >
              <Image
                src={`/Blog/${obj.image}`}
                alt={obj.heading}
                className="object-cover"
                height={1000}
                width={1000}
              />
              <div className="p-4">
                <div className="flex gap-2 text-gray-600 mb-2">
                  <SlCalender className="text-xl" />
                  <span className="text-sm">
                    <Moment format="MMMM DD, YYYY">{obj?.date}</Moment>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {obj?.name}
                </h2>
                <p
                  className="text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: obj?.description }}
                ></p>
              </div>
            </li>
          ) : (
            <p className="text-gray-500">Blog not found</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-3 lg:block hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
