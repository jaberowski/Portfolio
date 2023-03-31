import React from "react";
import setup from "../public/images/setup.png";
import Image from "next/image";
import Section from "./Section";

function HomeSection({ setCurrentSection }) {
  return (
    <Section
      id="Home"
      setCurrentSection={setCurrentSection}
      className="h-screen"
    >
      <div className="navbar h-[8vh] border-b-2 border-black  px-8 flex justify-between items-center list-none ">
        <h1 className="text-3xl font-extrabold font-alkatra text-[#6c04f4]">
          {"<Jf />"}
        </h1>
        <div className="flex w-1/6 justify-between">
          <li className="self-center">Blog</li>
          <li className="border-2 border-[#6c04f4] p-3 rounded-3xl text-[#6c04f4] hover:bg-[#6c04f4] hover:text-white font-medium transition-all duration-300">
            Contact
          </li>
        </div>
      </div>
      <div className="h-[92vh]  p-5 flex flex-col justify-between">
        <div className=" flex flex-col gap-6 w-1/2 mx-auto text-center items-center font-firaSans">
          <h4 className="text-xl">Hi My Name is</h4>
          <h1 className="text-6xl font-bold">Jaber Fathi</h1>
          <h1 className="text-6xl font-bold">I Build Thing For Web</h1>
          <p className="w-4/6">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. currently, I'm focused
            on building accessible, human-centered products at digikala
          </p>
          <button className="text-2xl self-center border-2 p-3 drop-shadow-2xl hover:drop-shadow-lg active:drop-shadow-none active:scale-[99%] rounded-lg font-medium bg-[#6c04f4] text-white">
            Check out my resume
          </button>
        </div>
        <div className="max-w-[50%] mx-auto">
          <Image src={setup} alt="" />
        </div>
      </div>
    </Section>
  );
}

export default HomeSection;
