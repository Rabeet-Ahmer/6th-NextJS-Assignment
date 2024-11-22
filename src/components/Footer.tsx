import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="px-6 md:px-20 py-20 mt-10 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="max-w-[287px] md:max-w-none">
          <h3 className="font-Roboto font-semibold text-lg text-center md:text-left">
            Subscribe to our newsletter
          </h3>
          <p className="font-Roboto font-normal text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 min-w-[380px] md:min-w-0">
            <input
              placeholder="Enter your email"
              className="border border-black p-3 min-w-[265px] rounded-md font-Roboto font-normal text-base"
            ></input>
            <button className="px-6 py-3 border border-black rounded-md font-Roboto font-normal text-base duration-300 hover:scale-110 hover:bg-emerald-300">
              Subscribe
            </button>
          </div>
          <div>
            <p className="font-Roboto font-normal text-xs text-center">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 py-20 border-b-2 border-black">
        <div className="min-w-[250px] flex justify-center md:flex-none">
        <Image src={"logo.svg"} alt="" width={130.6} height={40}/>
        </div>
        <div className="flex flex-col gap-4 min-w-[250px] items-center md:items-start">
            <h4 className="font-Roboto font-semibold text-base">Courses</h4>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Business</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Development</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Technology</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Design</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Programming</Link>
        </div>
        <div className="flex flex-col gap-4 min-w-[250px] items-center md:items-start">
            <h4 className="font-Roboto font-semibold text-base">Resources</h4>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Career</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Resume</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Learning</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Interview Preparation</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Jobs</Link>
        </div>
        <div className="flex flex-col gap-4 min-w-[250px] items-center md:items-start">
            <h4 className="font-Roboto font-semibold text-base">About Us</h4>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Contact</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Help/Support</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">FAQ</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Terms and Conditions</Link>
            <Link href={"/"} className="font-Roboto font-normal text-sm hover:underline">Partners</Link>
        </div>
      </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-[33px] gap-6 md:gap-0">  
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 font-Roboto font-normal text-md">
                <p>2023 Ddsgnr. All right reserved.</p>
                <div className="space-x-6">
                <Link href={"/"} className="hover:underline">Privacy Policy</Link>
                <Link href={"/"} className="hover:underline">Terms of Service</Link>
                <Link href={"/"} className="hover:underline">Cookies Settings</Link>
                </div>
            </div>
            <div className="flex gap-3">
                <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"facebook.svg"} alt="media" width={24} height={24}/></Link>
                <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"instagram.svg"} alt="media" width={24} height={24}/></Link>
                <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"twitter.svg"} alt="media" width={24} height={24}/></Link>
                <Link href={"/"} className="duration-300 hover:scale-125"><Image src={"linkedin.svg"} alt="media" width={24} height={24}/></Link>
            </div>
        </div>
    </section>
  );
};

export default Footer;
