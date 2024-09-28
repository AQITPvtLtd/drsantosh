import React from "react";
import DetailedBlog from "./DetailedBlog";

const page = ({ params }) => {
  const id = params.id;
  console.log(id);
  return (
    <div>
      <DetailedBlog id={id}/>
    </div>
  );
};

export default page;
