import Image from "next/image";
import React, { FC } from "react";

interface Box {
  image1: string,
  text1: string,
  number: string,
  h1: string,
  desc: string,
  price: number,
  hidden?: boolean
}

const   CoursesBox: FC<{ item: Box }> = ({ item }) => {
  return (
    <section className={`${item.hidden && "hidden md:block"} bg-[#F7F7F7] w-[416px] max-w-[416px] space-y-6 rounded-md md:rounded-none` }>
        <div className="max-h-[300px] overflow-hidden rounded-md md:rounded-none">
      <Image src={item.image1} alt="course image" width={416} height={300} />
        </div>
      <div className="flex justify-between px-4">
        <p className="font-Roboto font-semibold text-md">{item.text1}</p>
        <div className="flex gap-2">
          <Image src={"star.svg"} alt="stars" width={24} height={24} />
          <p className="font-Roboto pt-0.5 font-semibold text-md">{item.number}</p>
        </div>
      </div>
        <div className="flex flex-col gap-3 px-4">
          <h1 className="font-Roboto font-bold text-2xl">{item.h1}</h1>
          <p className="font-Roboto font-normal text-base">{item.desc}</p>
        </div>
        <div className="flex gap-9 items-center px-4 pb-6">
            <button className="px-5 py-2 border border-black rounded-md font-Roboto font-normal text-base duration-300 hover:scale-110 hover:bg-emerald-300">Enroll Now</button>
            <p className="font-Roboto font-semibold text-base">${item.price}</p>
        </div>
    </section>
  );
};

export default CoursesBox;
