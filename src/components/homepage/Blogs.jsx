"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHeartPlus } from "react-icons/gi";
import { getBlog } from "@/services/getBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const [error, setError] = useState(null);

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
  }, []);
  return (
    <div className="p-4 lg:mt-10 mt-16">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 bg-white rounded-full py-3 px-6 shadow-md lg:w-3/12">
          <GiHeartPlus className="text-blue-400 text-3xl" />
          <h1 className="text-[#07a496] text-2xl font-bold">
            Our Latest Blogs
          </h1>
        </div>
      </div>

      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:px-10 px-3">
          {blogs.slice(0, 3).map((n) => (
            <li
              key={n.url}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={`/Blog/${n.image}`}
                alt={n.heading}
                className="w-full h-64 object-cover"
                height={100}
                width={1000}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{n.name}</h2>

                <p
                  className="text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: n.description }}
                ></p>
                <Link
                  href={`/blogs/${n.id}/${n.url}`}
                  className="flex mb-3 py-4"
                >
                  <div className="bg-[#07a496] p-3 text-white rounded-xl hover:font-semibold">
                    Read More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center mt-10 ">
        <Link
          href="/blogs"
          className="bg-[#07a496] p-3 text-white rounded-xl hover:font-semibold"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
