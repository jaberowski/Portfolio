import React from "react";
import Section from "./Section";
import firstProject from "../public/images/first-project.webp";
import Image from "next/image";

function ProjectsSection({ setCurrentSection }) {
  return (
    <Section
      setCurrentSection={setCurrentSection}
      id="Projects"
      className="h-screen w-[87%] mx-auto flex flex-col justify-center items-center font-firaSans "
    >
      <div className="text-ceter mb-10">
        <h1 className="text-center text-6xl font-bold">PROJECTS</h1>
        <h3 className="text-center text-2xl text-gray-600 mt-4">
          Some Things I’ve Built
        </h3>
      </div>
      <div className="w-[90%] h-[40%] relative flex justify-around items-center p-8 shadow-xl">
        {/* borders */}
        <div className="absolute h-2 w-52 bg-primary_blackish top-0 left-0 -translate-x-1/4 -translate-y-full" />
        <div className="absolute h-2 w-52 bg-primary_blackish top-0 right-0 translate-x-1/4 -translate-y-full" />
        <div className="absolute h-2 w-52 bg-primary_blackish bottom-0 left-0 -translate-x-1/4 translate-y-full" />
        <div className="absolute h-2 w-52 bg-primary_blackish bottom-0 right-0 translate-x-1/4 translate-y-full" />
        <div className="absolute h-36 w-2 bg-primary_blackish top-0 left-0 -translate-y-1/4 -translate-x-full" />
        <div className="absolute h-36 w-2 bg-primary_blackish bottom-0 left-0 translate-y-1/4 -translate-x-full" />
        <div className="absolute h-36 w-2 bg-primary_blackish top-0 right-0 -translate-y-1/4 translate-x-full" />
        <div className="absolute h-36 w-2 bg-primary_blackish bottom-0 right-0 translate-y-1/4 translate-x-full" />
        {/* borders */}

        <Image src={firstProject} alt="sdfa" className="h-[80%] w-auto" />
        <div className=" flex flex-col justify-around items-start h-[70%]">
          <h3 className="text-3xl font-medium">Agyle Intelligence</h3>
          <p className="text-xl text-gray-600">
            A platform for automating data collection and reporting throughout
            teams, operations and supply chains.
          </p>
          <button className="">visit Site</button>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;
