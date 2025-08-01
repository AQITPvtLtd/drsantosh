"use client";

import React from "react";
import { getBlog } from "@/services/getBlog";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        setBlogs(response.results);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="sm:px-6 lg:px-2 border-2 rounded-2xl h-fit pb-2">
        <ul className="h-fit">
          <div className="px-3 py-3">
            <p className="text-[#07a496] font-semibold text-2xl">
              More Blogs
            </p>
          </div>

          {blogs.map((n) => (
            <li key={n.url}>
              <div>
                <Link
                  href={`/blogs/${n.url}`}
                  className="flex hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <div className="flex gap-1 hover:text-[#07a496]">
                    <div className="text-base">
                      <AiOutlineDoubleRight className="mt-1" />
                    </div>
                    <h2 className="text-base font-medium">{n.short_name}</h2>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
