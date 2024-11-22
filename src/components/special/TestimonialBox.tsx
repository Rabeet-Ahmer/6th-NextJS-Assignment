import Image from "next/image";
import React, { FC } from "react";

interface Box {
  desc: string;
  image: string;
  name: string;
  field: string;
  hidden?: boolean
}

const TestimonialBox: FC<{ item: Box }> = ({ item }) => {
  return (
    <section className={`${item.hidden && "hidden md:flex"} max-w-[416px] border border-black p-8 flex flex-col gap-6`}>
      <Image src={"ratings.svg"} alt="ratings" width={116} height={18.89} />
      <p className="font-Roboto font-normal text-lg">{item.desc}</p>
      <div className="flex items-center gap-5">
        <div>
          <Image src={item.image} alt="image" width={56} height={56} className="object-cover rounded-full"/>
        </div>
        <div>
            <h4 className="font-Roboto font-semibold text-base">{item.name}</h4>
            <p className="font-Roboto font-normal text-base">{item.field}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBox;
