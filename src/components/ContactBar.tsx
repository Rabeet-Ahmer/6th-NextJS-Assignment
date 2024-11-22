import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactBar = () => {
  return (
    <section className="hidden md:flex bg-[#F7F7F7] mb-4 py-4 px-[62px] justify-between border-b-[1px] border-b-black">
      <div className="flex gap-x-4">
        <p className="font-Roboto">Phone Number: 956 742 455 678</p>
        <p className="bg-black w-[1px] rounded-full"></p>
        <p className="font-Roboto">Email: info@ddsgnr.com</p>
      </div>
      <div className="flex gap-3">
      <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"facebook.svg"} alt="facebook logo" width={24} height={24}/></Link>
      <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"instagram.svg"} alt="facebook logo" width={24} height={24}/></Link>
      <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"twitter.svg"} alt="facebook logo" width={24} height={24}/></Link>
      <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"linkedin.svg"} alt="facebook logo" width={24} height={24}/></Link>
      </div>
    </section>
  );
};

export default ContactBar;
