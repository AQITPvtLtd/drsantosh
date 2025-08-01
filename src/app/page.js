import Banner from "@/components/homepage/Banner";
import Blogs from "@/components/homepage/Blogs";
import Contact from "@/components/homepage/Contact";
import DrSantosh from "@/components/homepage/DrSantosh";
import Facilities from "@/components/homepage/Facilities";
import Faq from "@/components/homepage/Faq";

export const metadata = {
  title: "Dr. Santosh Ghai | Trusted Internal Medicine & General Physician",
  description:
    "Get personalized care from trusted internal medicine and general physician. We specialize in adult health, managing chronic conditions like diabetes, hypertension, and more. Book your consultation today.",
  keywords: [
    "trusted internal medicine",
    "general physician",
    "comprehensive adult care",
    "internal medicine specialist",
    "adult healthcare expert",
    "primary care physician",
    "general medicine doctor",
    "internal medicine clinic",
    "adult wellness checkup",
    "chronic disease management",
    "preventive healthcare",
    "routine health exams",
    "general health doctor",
    "internal medicine expert",
    "adult health specialist",
  ],
};

export default function Home() {
  return (
    <>
      <Banner />
      <DrSantosh />
      <Facilities />
      <Blogs />
      <Contact />
      <Faq />
    </>
  );
}
