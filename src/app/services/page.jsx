import React from "react";
import Services from "./Services";
export const metadata = {
  title: "Expert Care with Dr. Santosh Ghai | Internal Medicine & General Health",
  description:
    "Explore expert internal medicine and general physician services by Dr. Santosh Ghai in Delhi. Personalized care for chronic diseases, lifestyle conditions, and more.",
  keywords: [
    "dr santosh ghai services",
    "internal medicine services",
    "general physician delhi",
    "chronic disease management",
    "diabetes care delhi",
    "thyroid treatment delhi",
    "hypertension management",
    "cholesterol control tips",
    "adult health checkups",
    "fever treatment specialist",
    "infection treatment delhi",
    "liver disease care",
    "gut health expert delhi",
    "hormonal disorder care",
    "vaccination services delhi",
  ],
};

const page = ({ params }) => {
  const id = params.id;
  return (
    <div className="">
      <Services id={id} />
    </div>
  );
};

export default page;
