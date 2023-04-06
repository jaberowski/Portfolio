import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

function TechList() {
  return (
    <motion.div
      className="relative w-[87%] min-h-[70vh] my-[80px] p-12 flex flex-col justify-around items-center  font-firaSans rounded-3xl"
      initial="hidden"
      whileInView="show"
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      viewport={{ amount: 0.75, once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* borders */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-secondary border-t-[12px] border-l-[12px] rounded-tl-3xl"
        initial={{ display: "block" }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 border-secondary border-t-[12px] border-r-[12px] rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-secondary border-b-[12px] border-l-[12px] rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-secondary border-b-[12px] border-r-[12px] rounded-br-3xl" />
      <div className="absolute inset-0 border-[12px] border-secondary rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gray-200" />

      {/* borders */}
      <h1 className="text-6xl font-bold">Tech Stacks</h1>
      <div className="relative mt-10 grid grid-cols-3 gap-5 w-[95%] py-4">
        <div className="absolute h-1 w-full bg-gradient-to-r from-white via-black to-white top-0 right-1/2 translate-x-1/2" />
        <div className="absolute h-1 w-full bg-gradient-to-r from-white via-black to-white bottom-0 right-1/2 translate-x-1/2" />
        <motion.div
          className="flex flex-col items-center  p-4 rounded-md"
          whileHover={{
            boxShadow: "3px 3px 10px 2px black",
            scale: 1.02,
          }}
        >
          <DiJavascript1 fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">JavaScript</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </motion.div>
        <div className="flex flex-col items-center  p-4 rounded-md">
          <FaReact fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">React</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </div>
        <div className="flex flex-col items-center  p-4 rounded-md">
          <TbBrandNextjs fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">Next</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </div>
        <div className="flex flex-col items-center  p-4 rounded-md">
          <TbBrandTypescript fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">TypeScript</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </div>
        <div className="flex flex-col items-center  p-4 rounded-md">
          <FaGit fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">Git</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </div>
        <div className="flex flex-col items-center  p-4 rounded-md">
          <SiTailwindcss fontSize={56} className="text-secondary" />
          <h3 className="text-3xl font-semibold mt-3">Tailwind</h3>
          <p className="mt-2 text-gray-600">
            The library for web and native user interfaces
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TechList;
