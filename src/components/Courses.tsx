import React from "react";
import CoursesBox from "./special/CoursesBox";
import Link from "next/link";

const Courses = () => {
  type Box = {
    image1: string;
    text1: string;
    number: string;
    h1: string;
    desc: string;
    price: number;
    hidden?: boolean
  };

  const boxes: Box[] = [
    {
      image1: "courseimg1.svg",
      text1: "Design",
      number: "5.0",
      h1: "UX/UI Design 201",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
    },
    {
      image1: "courseimg2.svg",
      text1: "Programming",
      number: "5.0",
      h1: "Introduction to Python",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
    },
    {
      image1: "courseimg3.svg",
      text1: "Business",
      number: "5.0",
      h1: "Data Analysis for Beginners",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
    },
    {
      image1: "courseimg4.svg",
      text1: "Art",
      number: "5.0",
      h1: "Art Specialization",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
      hidden: true
    },
    {
      image1: "courseimg5.svg",
      text1: "Law",
      number: "5.0",
      h1: "Rule of Law",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
      hidden: true
    },
    {
      image1: "courseimg6.svg",
      text1: "Tech",
      number: "5.0",
      h1: "Introduction to webflow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
      hidden: true
    },
  ];

  return (
    <section className="py-28 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-Roboto font-bold text-[32px] md:text-[56px]">Courses</h1>
          <p className="font-Roboto font-normal text-lg">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="flex py-16">
          <Link href={"/"}><p className="px-4 py-2 font-Roboto font-normal text-base hover:underline">Popular</p></Link>
          <Link href={"/"}><p className="px-4 py-2 font-Roboto font-normal text-base hover:underline">Recomended</p></Link>
          <Link href={"/"}><p className="px-4 py-2 font-Roboto font-normal text-base hover:underline">Best Price</p></Link>
        </div>
        <div className="flex flex-col md:flex-none md:grid md:grid-cols-3 gap-x-8 gap-y-16 overflow-hidden">
          {boxes.map((item, i) => {
            return (
                <CoursesBox key={i} item={item} />
            );
          })}
        </div>
        <button className="font-Roboto font-normal text-base py-2 px-4 mt-16 border border-black rounded-md duration-300 hover:scale-110 hover:bg-red-300">View All Courses</button>
      </div>
    </section>
  );
};

export default Courses;
