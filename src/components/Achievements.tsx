import React from "react";

const Achievements = () => {
  return (
    <section className="flex flex-col py-12 justify-self-center md:py-36 gap-y-8 max-w-[428px] md:max-w-none">
      <div className="flex flex-col items-center mt-[69px] gap-6">
        <h1 className="font-Roboto font-bold text-[32px] md:text-5xl">Our Achivements</h1>
        <p className="hidden md:block font-Roboto font-normal text-lg text-center max-w-[1152px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <p className="font-Roboto font-normal text-lg text-center max-w-[362px] md:hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-8 md:gap-6">
        <div className="px-[59px] md:px-[102.5px] text-center space-y-2 md:space-y-4">
          <h1 className="font-Roboto font-bold text-xl md:text-[40px]">+200</h1>
          <p className="font-Roboto font-normal text-base text-center">Courses</p>
        </div>
        <div className="px-[59px] md:px-[102.5px] text-center space-y-2 md:space-y-4">
          <h1 className="font-Roboto font-bold text-xl md:text-[40px]">50K</h1>
          <p className="font-Roboto font-normal text-base text-center">Mentors</p>
        </div>
        <div className="px-[59px] md:px-[102.5px] text-center space-y-2 md:space-y-4">
          <h1 className="font-Roboto font-bold text-xl md:text-[40px]">370K</h1>
          <p className="font-Roboto font-normal text-base text-center">Students</p>
        </div>
        <div className="px-[59px] md:px-[102.5px] text-center space-y-2 md:space-y-4">
          <h1 className="font-Roboto font-bold text-xl md:text-[40px]">100+</h1>
          <p className="font-Roboto font-normal text-base text-center">Recognition</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
