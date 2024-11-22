import React from "react";
import TeamBox from "./special/TeamBox";

const Team = () => {
  type Box = { image: string; name: string; field: string; hidden?: boolean };

  const boxes: Box[] = [
    {
      image: "teamimg1.svg",
      name: "James Nduku",
      field: "Marketing Coordinator",
    },
    {
      image: "teamimg2.svg",
      name: "Joseph Munyambu",
      field: "Nursing Assistant",
    },
    {
      image: "teamimg3.svg",
      name: "Joseph Ngumbau",
      field: "Medical Assistant",
    },
    {
      image: "teamimg4.svg",
      name: "Erick Kipkemboi",
      field: "Web Designer",
      hidden: true,
    },
    {
      image: "teamimg5.svg",
      name: "Stephen Kerubo",
      field: "President of Sales",
      hidden: true,
    },
    {
      image: "teamimg6.svg",
      name: "John Leboo",
      field: "Dog Trainer",
      hidden: true,
    },
  ];

  return (
    <section className="flex flex-col gap-20 py-14 bg-[#F7F7F7]">
      <div className="flex justify-center">
        <div className=" flex flex-col items-center  gap-6 max-w-[363px] md:max-w-none">
          <h1 className="font-Roboto font-bold text-[32px] md:text-5xl">
            Our team
          </h1> 
          <p className="font-Roboto font-normal text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-y-12 md:gap-y-10">
        {boxes.map((items, i) => (
          <TeamBox key={i} item={items} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="md:hidden font-Roboto font-normal text-base py-2 px-4 md:mt-16 border border-black rounded-md duration-300 hover:scale-110 hover:bg-red-300">
          View All
        </button>
      </div>
    </section>
  );
};

export default Team;
