"use client";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlog";
import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
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
    <div className="sm:mt-[75px] lg:mt-[100px] mt-[75px] px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Image
          src="/Blog/blog.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#07a496] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Blogs
        </h1>
      </div>

      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((n) => (
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
                <div className="flex gap-3">
                  <SlCalender />
                  <p className="text-gray-800 text-sm mb-4">
                    <Moment format="MMMM DD, YYYY">{n.date}</Moment>
                  </p>
                </div>
                <p
                  className="text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: n.description }}
                ></p>
                <Link href={`/blogs/${n.url}`} className="flex mb-3 py-4">
                  <div className="bg-[#07a496] p-3 text-white rounded-xl">
                    Read More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
