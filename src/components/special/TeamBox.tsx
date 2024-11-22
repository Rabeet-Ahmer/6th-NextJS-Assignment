import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Box {
  image: string;
  name: string;
  field: string;
  hidden?: boolean 
}

const TeamBox: FC<{ item: Box }> = ({ item }) => {
  return (
  <section className= {`${item.hidden && "hidden md:flex "} flex flex-col items-center gap-5`}>
    <Image src={item.image} alt="team member" width={80} height={80}/>
    <div className="flex flex-col items-center">
        <h4 className="font-Roboto font-semibold text-xl">{item.name}</h4>
        <p className="font-Roboto font-normal text-lg">{item.field}</p>
    </div>
    <div className="flex gap-[14px]">
        <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"linkedin.svg"} alt="link image" width={24} height={24}/></Link>
        <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"twitter.svg"} alt="link image" width={24} height={24}/></Link>
        <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"teamlink.svg"} alt="link image" width={24} height={24}/></Link>
    </div>
  </section>
  
)};

export default TeamBox;
