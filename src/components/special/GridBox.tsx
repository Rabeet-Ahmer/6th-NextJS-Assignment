import Image from "next/image";
import React, { FC } from "react";

interface Box {
  text1: string;
  text2: string;
  image: string;
  hidden: boolean;
}

const GridBox: FC<{ item: Box }> = ({ item }) => {
  return (
    <section
      className={`${item.hidden && "hidden md:flex "} bg-[#F7F7F7] flex  items-center gap-8 p-4 rounded-md duration-300 hover:scale-110 hover:bg-emerald-300 `}
    >
      <div className="p-[34px] bg-white rounded-lg flex items-center justify-center">
        <Image src={item.image} alt="icons" width={32} height={32} />
      </div>
      <div>
        <p className={"font-Roboto font-semibold text-xl"}>{item.text1}</p>
        <p className="font-Roboto font-normal text-lg">{item.text2}</p>
      </div>
    </section>
  );
};

export default GridBox;
