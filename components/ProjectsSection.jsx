import React from "react";
import Section from "./Section";
import firstProject from "../public/images/first-project.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Agyle Intelligence",
    image: firstProject,
    description:
      "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
  },
  {
    title: "Agyle Intelligence",
    image: firstProject,
    description:
      "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
  },
  {
    title: "Agyle Intelligence",
    image: firstProject,
    description:
      "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
  },
];

function ProjectsSection({ setCurrentSection }) {
  return (
    <Section
      setCurrentSection={setCurrentSection}
      id="Projects"
      className="min-h-screen flex flex-col justify-center items-center font-firaSans "
    >
      <div className="text-ceter my-9">
        <h1 className="text-center text-5xl font-bold tracking-wide">
          PROJECTS
        </h1>
        <h3 className="text-center text-2xl text-gray-600 mt-4">
          Some Things I’ve Built
        </h3>
      </div>
      <div className="h-1 w-[90%] md:w-full bg-gradient-to-r from-white via-black to-white  " />
      {items.map((item, index) => {
        return (
          <>
            <motion.div
              className="w-full md:w-[90%] min-h-[30vh] relative flex flex-col md:flex-row gap-16  justify-around  p-8 text-center md:text-left "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={firstProject}
                alt="sdfa"
                className="w-full md:w-2/5 object-contain"
              />
              <div className="w-full md:w-3/5 flex flex-col gap-3 justify-around items-start">
                <h3 className=" text-3xl mx-auto md:mx-0 font-medium">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600">{item.description}</p>
                <div className="flex gap-3 self-center md:self-auto">
                  <button className="bg-primary_light text-white p-2 rounded-md shadow-md ">
                    Go Live
                  </button>
                  <button className="bg-secondary text-white p-2 rounded-md shadow-md">
                    Info Page
                  </button>
                </div>
              </div>
            </motion.div>
            <div className="h-1 w-[90%] md:w-full bg-gradient-to-r from-white via-black to-white  " />
          </>
        );
      })}
    </Section>
  );
}

export default ProjectsSection;
