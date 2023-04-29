import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const items = [
  { title: "JavaScript", icon: <DiJavascript1 /> },
  { title: "React", icon: <FaReact /> },
  { title: "Next.JS", icon: <TbBrandNextjs /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "Git", icon: <FaGit /> },
  { title: "Tailwind", icon: <SiTailwindcss /> },
];

function TechList() {
  return (
    <motion.div
      className="w-[100%] min-h-[45vh]  py-8 px-3 flex flex-col justify-around items-center  font-firaSans rounded-3xl"
      initial="hidden"
      whileInView="show"
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      viewport={{ amount: 0.75, once: true }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-5xl font-bold tracking-wide">Tech Stacks</h1>
      <h3 className="text-center text-2xl text-gray-500 mt-2">
        I Can Write Bugs in any of Below
      </h3>

      <div className="relative mt-10 grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  gap-5 w-full py-4 ">
        {items.map((item, i) => {
          let borderDecoration;
          borderDecoration =
            i % 2 ? (
              <>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-primary_light border-b-[5px] border-l-[5px] rounded-bl-md" />
                <div className="absolute top-0 right-0 w-12 h-12 border-primary_light border-t-[5px] border-r-[5px] rounded-tr-md" />
              </>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-12 h-12 border-primary_light border-t-[5px] border-l-[5px] rounded-tl-md" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-primary_light border-b-[5px] border-r-[5px] rounded-br-md" />
              </>
            );
          return (
            <div
              className="relative flex flex-col items-center justify-center  p-4 rounded-md shadow-md bg-gray-50 aspect-[5/3]"
              key={item.title}
            >
              {borderDecoration}
              <motion.div
                className="text-[56px] text-secondary "
                initial={{ scale: 0 }}
                variants={{ show: { scale: 1 } }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-medium xl:text-2xl xl:font-bold mt-3">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default TechList;
