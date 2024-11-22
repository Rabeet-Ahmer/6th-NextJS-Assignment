import React from "react";
import GridBox from "./special/GridBox";
import Link from "next/link";

const Categories = () => {
  type Box1 = { text1: string; text2: string; image: string, hidden: boolean };

  const boxes: Box1[] = [
    {
      text1: "Design & Development",
      text2: "50+ Courses Available",
      image: "icon1.svg",
      hidden: false,
    },
    {
      text1: "Marketing",
      text2: "50+ Courses Available",
      image: "icon2.svg",
      hidden: false,
    },
    {
      text1: "Development",
      text2: "50+ Courses Available",
      image: "icon3.svg",
      hidden: false,
    },
    {
      text1: "Communication",
      text2: "50+ Courses Available",
      image: "icon4.svg",
      hidden: true,
    },
    {
      text1: "Digital Marketing",
      text2: "50+ Courses Available",
      image: "icon5.svg",
      hidden: true,
    },
    {
      text1: "Self Development",
      text2: "50+ Courses Available",
      image: "icon6.svg",
      hidden: true,
    },
    {
      text1: "Business",
      text2: "50+ Courses Available",
      image: "icon7.svg",
      hidden: true,
    },
    {
      text1: "Finance",
      text2: "50+ Courses Available",
      image: "icon8.svg",
      hidden: true,
    },
    {
      text1: "Consulting",
      text2: "50+ Courses Available",
      image: "icon9.svg",
      hidden: true,
    },
  ];

  return (
    <section className="pt-28 md:space-y-20">        
      <div className="flex flex-col justify-self-center gap-6 mb-12 md:mb-0">
        <h1 className="md:hidden font-Roboto font-bold text-[32px] text-center md:text-start md:text-5xl">
          Explore Courses By <br /> Category
        </h1>
        <h1 className="hidden md:block font-Roboto font-bold text-[32px] text-center md:text-start md:text-5xl">
          Explore Courses By Category
        </h1>
        <p className="font-Roboto font-normal text-lg max-w-[385px] md:max-w-none text-center md:text-start">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="flex flex-col gap-6 justify-self-center md:justify-self-auto md:grid md:grid-cols-3 md:grid-rows-3 md:gap-x-6 md:gap-y-16 ">
        {boxes.map((box, i) => {
          return (
          <Link key={i} href={"/"}><GridBox item={box}/></Link>
        );
        })}
      </div>
      <button className="py-3 px-[17.5px] border border-black rounded-md flex justify-self-center duration-300 hover:scale-110 hover:bg-red-300">View All Courses</button>
    </section>
  );
};

export default Categories;
