import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div>
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(footerbg.png)" }}
        >
          <div className="container mx-auto px-6 lg:py-5 sm:py-12">
            {/* Top section */}
            <div className="flex flex-wrap items-center justify-between py-10">
              <Image
                src="/logo/DrSantoshLogo.png"
                alt="/"
                width={300}
                height={200}
                className=""
              />
              <div className="flex gap-4 lg:mt-0 mt-10 ">
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
            <div className="lg:grid grid-cols-12">
              {/* Company Info */}
              <div className="col-start-2 col-span-3">
                <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4 text-white">
                  Company
                </h1>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
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
              <div className="col-span-3 mt-5 lg:mt-0 text-white">
                <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4">
                  Services
                </h1>
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

              {/* Contact Info */}
              <div className="col-span-4 mt-5 lg:mt-0 lg:pb-0 pb-4 text-white">
                <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4">
                  Contact
                </h1>
                <Link
                  href="https://www.google.com/maps/dir//Dr+Santosh+Ghai+%7C+Best+General+Physician+in+Karol+Bagh+%7C+General+Physician+in+New+Delhi+108+Pillar+No.+107+2-B,+Pusa+Rd,+next+to+Karol+Bagh,+Block+18+A,+Rajinder+Place,+Karol+Bagh+New+Delhi,+Delhi,+110005/@28.645151,77.1958129,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfd209d53079b:0x4498aadd3d84e14f!2m2!1d77.1958129!2d28.645151?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="__blank"
                >
                  <div>
                    <Link href='https://maps.app.goo.gl/LUrkpem7GTbiG4de6' className="flex items-start gap-2 cursor-pointer">
                      <div className="lg:text-2xl text-3xl">
                        <FaLocationDot className="text-blue-700" />
                      </div>
                      108 Pillar No. 107, 2-B, Pusa Rd, next to Karol Bagh,
                      Block 18 A, Rajinder Place, Karol Bagh, New Delhi, Delhi,
                      110005
                    </Link>
                  </div>
                </Link>
                <Link href="tel:+919999137803" target="__blank">
                  <div className="flex items-center gap-2 mt-2">
                    <div className="lg:text-2xl text-3xl">
                      <IoIosCall className="text-blue-700" />
                    </div>
                    <p className="text-lg">+91 9999137803</p>
                  </div>
                </Link>

                <Link
                  href="mailto:officialsantoshghai@gmail.com"
                  target="__blank"
                >
                  <div className="flex items-center gap-2 mt-2">
                    <div className="lg:text-2xl text-3xl">
                      <IoIosMail className="text-blue-700" />
                    </div>
                    <p className="text-lg">officialsantoshghai@gmail.com</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="https://tekbooster.com/"
            className="flex justify-center text-center font-semibold items-center p-2 text-white"
            target="__blank"
          >
            Design & Develope By Tek Booster (Digital Marketing Company)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
