import React from "react";
import setup from "../public/images/setup.png";
import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";

function HomeSection({ setCurrentSection }) {
  return (
    <Section
      id="Home"
      setCurrentSection={setCurrentSection}
      className="relative min-h-screen h-auto w-full"
    >
      <div className=" relative w-screen ml-[-50vw] left-[50%] min-h-[8vh] z-10 border-b-2 border-black  px-8 flex justify-between items-center list-none">
        <h1 className="text-3xl font-extrabold font-alkatra text-primary_dark">
          {"<Jf />"}
        </h1>
        <div className="flex  justify-between gap-4">
          <li className="self-center">Blog</li>
          <li className="border-2 border-primary_dark p-3 rounded-3xl text-primary_dark hover:bg-primary_dark hover:text-white font-medium transition-all duration-300">
            Contact
          </li>
        </div>
      </div>
      <div className="min-h-[92vh] h-auto  flex flex-col justify-between gap-5 ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="grow-[10] w-[85%]  md:w-[75%] lg:w-[65%]  mx-auto pt-4 flex flex-col justify-center  xs lg:justify-around lg:py-6 items-center gap-4  text-center  font-firaSans "
        >
          <h4 className="text-lg md:text-xl 2xl:text-2xl">Hi My Name is</h4>
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-primary_light from-33 to-secondary bg-clip-text text-fil text-transparent">
            Jaber Fathi
          </h1>
          <h1 className="text-4xl lg:text-5xl  font-semibold">
            I Build Things For Web
          </h1>
          <p className="text-lg lg:text-xl  ">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. currently, I'm focused
            on building accessible, human-centered products at digikala
          </p>
          <button className="text-lg md:text-xl  self-center border-2 p-2 2xl:p-3 drop-shadow-2xl hover:drop-shadow-lg active:drop-shadow-none active:scale-[99%] rounded-lg font-medium bg-primary_dark text-white">
            Check out my resume
          </button>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%]  h-auto mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Image src={setup} alt="" />
        </motion.div>
      </div>
    </Section>
  );
}

export default HomeSection;
