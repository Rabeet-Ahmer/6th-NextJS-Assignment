import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-self-center items-center md:ml-20 md:max-h-[800px] ">   
        <div className="flex flex-col gap-6 font-Roboto py-16 md:py-0 md:min-w-[700px]">  
          <h4 className="font-bold text-[40px] md:text-[56px] md:max-w-none">
            Learn new skills <br /> online with ease
          </h4>
          <p className="md:hidden font-normal text-lg max-w-[380px] md:max-w-none">
            Discover a wide range of courses covering a variety of
            subjects, taught by expert instructors.
          </p>
          <p className="hidden md:block font-normal text-lg max-w-[380px] md:max-w-none">
            Discover a wide range of courses covering a variety of <br /> 
            subjects, taught by expert instructors.
          </p>
          <div className="font-Roboto space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-md text-base duration-300 hover:scale-110 hover:bg-emerald-300 hover:text-black">
              Start learning Now
            </button>
            <button className="px-6 py-3 rounded-md text-base border border-black duration-300 hover:scale-110 hover:bg-emerald-300">
              Explore Courses
            </button>
          </div>
        </div>
        <div className=" md:hidden">
          <Image
            src={"heroposter2.svg"}
            alt="poster"
            width={640}
            height={900}
            className="w-[428px] h-[390px] md:w-full md:h-full object-cover object-top"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={"heroposter.svg"}
            alt="poster"
            width={640}
            height={900}
            className="w-[428px] h-[390px] md:w-full md:h-full object-cover object-top"
          />
        </div>
      </div>
      <div className="md:bg-[#F7F7F7] justify-self-center gap-6 md:justify-self-auto md:gap-0 py-12 md:px-2 md:py-20 flex flex-col md:flex-row justify-between">
        <p className="hidden md:block font-Roboto font-bold text-2xl">Trusted by 2000+ companies <br /> worldwide.</p>
        <p className="font-Roboto md:hidden font-bold text-lg px-6 md:px-0">Trusted by the world&apos;s best companies <br /> [social proof to build credibility]</p>
        <div className="flex gap-[19.12px] overflow-x-scroll md:overflow-x-hidden max-w-[428px] md:max-w-none">
            <Image src={"company1.svg"} alt="companies" width={123.8} height={38.52}/>
            <Image src={"company2.svg"} alt="companies" width={123.8} height={38.52}/>
            <Image src={"company3.svg"} alt="companies" width={123.8} height={38.52}/>
            <Image src={"company4.svg"} alt="companies" width={123.8} height={38.52} />
            <Image src={"company5.svg"} alt="companies" width={123.8} height={38.52} />
            <Image src={"company6.svg"} alt="companies" width={123.8} height={38.52} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
