import React from "react";
import Section from "./Section";
import me from "../public/images/me.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TechList from "./TechList";

function AboutMeSection({ setCurrentSection }) {
  return (
    <Section
      className="min-h-screen flex flex-col justify-start items-center"
      id="AboutMe"
      setCurrentSection={setCurrentSection}
    >
      <div className="w-[87%] h-[45vh] bg-blue-600 text-white p-12 rounded-3xl mt-9 shadow-xl flex items-center gap-12 relative">
        <Image src={me} width={300} height={300} className="w-96 h-96" />
        <div>
          <h2 className="text-2xl font-bold">
            Hi, I’m Jaber. Nice to meet you.
          </h2>
          <p className="text-lg w-2/3 ">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3}
          whileDrag={{ scale: 1.2 }}
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.9 }}
          className="absolute bg-white text-black px-24 py-8 top-4 right-4 rounded-lg"
        >
          playing
        </motion.div>
      </div>
      <TechList />
    </Section>
  );
}

export default AboutMeSection;
