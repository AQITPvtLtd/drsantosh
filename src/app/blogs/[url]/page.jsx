import React from "react";
import DetailedBlog from "./DetailedBlog";

const Page = ({ params }) => {
  const { url } = params;

  return (
    <div>
      <DetailedBlog url={url} />
    </div>
  );
};

export default Page;
