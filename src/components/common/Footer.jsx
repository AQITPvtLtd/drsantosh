import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" text-white pt-16">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(Footer/bgimg.png)" }}
      >
        <div className="container mx-auto px-6 lg:py-16 sm:py-12">
          {/* Top section */}
          <div className="flex flex-wrap items-center justify-between py-10">
            <Image
              src="/logo/DrSantoshLogo.png"
              alt="/"
              width={300}
              height={200}
              className=""
            />
            <div className="flex gap-4 lg:mt-0 mt-10">
              <Link
                href="https://www.instagram.com/drsantoshghai/"
                target="__black"
              >
                <FiInstagram className="text-4xl bg-blue-500 rounded-full p-2" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61562238766058"
                target="__black"
              >
                <FaFacebookF className="text-4xl bg-blue-800 rounded-full p-2" />
              </Link>

              <Link href="https://www.linkedin.com/" target="__black">
                <FaLinkedinIn className="text-4xl bg-blue-800 rounded-full p-2" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCueXPbbshhW8VtgU9BoPaqA"
                target="__black"
              >
                <AiOutlineYoutube className="text-4xl bg-red-500 rounded-full p-2" />
              </Link>
            </div>
          </div>

          {/* Grid section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:px-24">
            {/* Company Info */}
            <div>
              <h1 className="font-bold underline mb-4 text-3xl">Company</h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h1 className="font-bold underline mb-4 text-3xl">Services</h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/services">Diabetes</Link>
                </li>
                <li>
                  <Link href="/services">Hypertension</Link>
                </li>
                <li>
                  <Link href="/services">Headaches</Link>
                </li>
                <li>
                  <Link href="/services">Anemia</Link>
                </li>
                <li>
                  <Link href="/services">Kidney Disease</Link>
                </li>
              </ul>
            </div>

            {/* Fun Facts */}
            <div>
              <h1 className="font-bold underline mb-4 text-3xl">Fun Facts</h1>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">160M+</p>
                  <span className="text-blue-700">Visitors</span>
                </div>
                <div>
                  <p className="text-4xl font-bold">27M+</p>
                  <span className="text-blue-700">Orders Delivered</span>
                </div>
                <div>
                  <p className="text-4xl font-bold">190K+</p>
                  <span className="text-blue-700">Cities</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h1 className="font-bold underline mb-4 text-3xl">Contact</h1>

              <div className="flex items-center gap-2">
                <div className="lg:text-2xl text-3xl">
                  <FaLocationDot className="text-blue-700" />
                </div>
                <p>
                  108 Pillar No. 107, 2-B, Pusa Rd, next to Karol Bagh, Block 18
                  A, Rajinder Place, Karol Bagh, New Delhi, Delhi, 110005
                </p>
              </div>
              <Link href="tel:+919999137803">
                <div className="flex items-center gap-2">
                  <div className="lg:text-2xl text-3xl">
                    <IoIosCall className="text-blue-700" />
                  </div>
                  <p className="flex items-center gap-2 mt-2">+91 9999137803</p>
                </div>
              </Link>
            </div>

            {/* Newsletter */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 pb-14">
              <h1 className="font-bold underline mb-4 text-3xl">Newsletter</h1>
              <p className="mb-4">
                Get a free subscription to our health & fitness updates
              </p>
              <input
                type="text"
                placeholder="Enter Your email"
                className="w-full mb-3 rounded-full px-5 py-3 border-none bg-white text-gray-900"
              />
              <button className="w-full py-3 bg-blue-400 text-white rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
