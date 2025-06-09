import React from "react";
import DetailedBlog from "./DetailedBlog";
export const metadata = {
  title: "Dr. Santosh ghai : Blogs",
};
const Page = ({ params }) => {
  // console.log(params);
  const { id, url } = params;
  // console.log({ url, id });
  return (
    <div>
      <DetailedBlog id={id} url={url} />
    </div>
  );
};

export default Page;
