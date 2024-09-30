import React from "react";
import DetailedBlog from "./DetailedBlog";

const page = ({ params }) => {
  const id = params.url;
  console.log(id);
  return (
    <div>
      <DetailedBlog id={id}/>
    </div>
  );
};

export default page;
