import React from "react";
import Services from "./Services";
export const metadata = {
  title: "Dr. Santosh ghai : Services",
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
