import Banner from "@/components/homepage/Banner";
import Blogs from "@/components/homepage/Blogs";
// import Contact from "@/components/homepage/Contact";
import DrSantosh from "@/components/homepage/DrSantosh";
import Facilities from "@/components/homepage/Facilities";
import Faq from "@/components/homepage/Faq";

export default function Home() {
  return (
    <>
      <Banner />
      <DrSantosh />
      <Facilities />
      <Blogs />
      {/* <Contact /> */}
      <Faq />
    </>
  );
}
