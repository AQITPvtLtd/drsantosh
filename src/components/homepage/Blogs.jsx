import React from "react";
import Image from "next/image";
import { GiHeartPlus } from "react-icons/gi";

const Blogs = () => {
  return (
    <div className="p-4 lg:mt-10 mt-16">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 bg-white rounded-full py-3 px-6 shadow-md lg:w-3/12">
          <GiHeartPlus className="text-blue-400 text-3xl" />
          <h1 className="text-blue-400 text-2xl font-bold">Our Latest Blogs</h1>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-8">
          Learn From Our Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {/* Blog Card 1 */}
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Blog/blog1.jpg" // replace with your image path
            alt="Blog image 1"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-start gap-2 mb-3">
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                March 6, 2024
              </div>
            </div>
            <p className="font-bold text-lg mb-2">
              Unbreakable Optimism I Miss Cynthia Rutare to
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Blog/blog2.jpg" // replace with your image path
            alt="Blog image 2"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-start gap-2 mb-3">
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                March 6, 2024
              </div>
            </div>
            <p className="font-bold text-lg mb-2">
              What does your blood type have to do with your health?
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Blog/blog3.jpg" // replace with your image path
            alt="Blog image 3"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-start gap-2 mb-3">
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                March 6, 2024
              </div>
            </div>
            <p className="font-bold text-lg mb-2">
              Modern Medical Treatment with new Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
