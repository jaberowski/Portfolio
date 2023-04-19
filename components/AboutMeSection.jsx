import React from "react";
import Section from "./Section";
import me from "../public/images/me.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TechList from "./TechList";

function AboutMeSection({ setCurrentSection }) {
  return (
    <Section
      className="min-h-screen flex flex-col justify-start items-center border-b-2 border-gray-300"
      id="AboutMe"
      setCurrentSection={setCurrentSection}
    >
      <div className="w-full min-h-[80vh] md:min-h-[40vh] bg-blue-600 text-white p-6 md:rounded-3xl md:mt-9 shadow-xl flex flex-col items-center md:flex-row md:items-center gap-12 relative">
        <Image
          src={me}
          width={300}
          height={300}
          className="w-64 md:w-80 2xl:w-96"
        />
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">
            Hi, I’m Jaber. Nice to meet you.
          </h2>
          <p className="text-lg  lg:text-xl leading-8">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <TechList />
    </Section>
  );
}

export default AboutMeSection;
