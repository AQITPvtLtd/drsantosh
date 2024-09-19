import React from "react";
import "animate.css";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="mt-[125px]">
      <div className="relative">
        <Image
          src="/Blog/blog.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-[#04b67c] opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Our Blogs
        </h1>
      </div>

      <h1 className="text-center font-semibold lg:text-5xl mt-10 items-center animate__animated animate__backInUp animate__infinite animate__slow">
        Coming Soon
      </h1>
    </div>
  );
};

export default Blog;
