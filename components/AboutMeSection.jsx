import React from "react";
import Section from "./Section";
import me from "../public/images/me.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TechList from "./TechList";
import TypewriterComponent from "typewriter-effect";

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
          alt="jaber fathi image"
        />
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">
            Hi, I’m Jaber. Nice to meet you.
          </h2>
          <p className="text-lg  lg:text-xl leading-8">
            I got interested in programming a couple of years ago and I&#39;m
            enjoying coding ever since. For the last two years, reading
            documentation and articles, doing projects, and asking around about
            how to get my code to work have been highlights of my days. Now that
            I&#39;ve decided to pursue it as a career, I&#39;m excited to work
            as part of a team. So, if there is an opening for a passionate
            junior Front-end web developer, I believe I would be a perfect match
            for your team.
          </p>
        </div>
      </div>
      <TechList />
    </Section>
  );
}

export default AboutMeSection;
