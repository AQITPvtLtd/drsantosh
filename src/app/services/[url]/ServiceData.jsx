import React from "react";
import Image from "next/image";
import { service } from "@/data/service";

const ServiceData = ({ url }) => {
    const obj = service.find((item) => item.url == url);

    if (!obj) {
        return <div>Service data not found.</div>;
    }

    return (
        <div className="mt-[100px]">

            <div key={obj.id} className="gap-4 items-center">
                <div className="space-y-8">
                    <div className="relative">
                        <Image
                            src="/Facilities/third.avif"
                            width={10000}
                            height={10000}
                            className="w-full h-[250px] object-cover"
                            alt="Service Image"
                        />
                        <div className="absolute inset-0 bg-[#07a496] opacity-50 z-10"></div>
                        <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 z-20">
                            <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl px-4">{obj.heading}</h2>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-100 text-gray-800 lg:p-8 p-3">

                    <div className="max-w-5xl mx-auto bg-white lg:p-6 p-4 rounded-lg">
                        {/* Content Section */}
                        <div className="px-4">

                            {/* Content Section */}
                            <div className="lg:col-span-2 flex flex-col justify-center bg-white rounded-lg overflow-hidden">
                                <p className="text-gray-700 text-lg mb-4">{obj.content}</p>
                            </div>


                            <div>
                                {/* Causes List */}
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Causes of {obj.heading} </h2>
                                <ul className="list-disc list-outside text-gray-700">
                                    {obj.causes.map((cause, index) => (
                                        <li key={index} className="mb-2">{cause}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                {/* Prevention List */}
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Prevention of {obj.heading}</h2>
                                <ul className="list-disc list-outside text-gray-700">
                                    {obj.prevention.map((step, index) => (
                                        <li key={index} className="mb-2">{step}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceData;
