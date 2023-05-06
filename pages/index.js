import SideNav from "@/components/SideNav";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";

import HomeSection from "@/components/HomeSection";

import { useState } from "react";
import Section from "@/components/Section";
import SocialSide from "@/components/SocialsSideNav";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactsSection from "@/components/ContactsSection";

const leftSideNavItems = [
  { icon: <HiOutlineHome />, title: "Home", link: "" },
  { icon: <HiOutlineUserCircle />, title: "About Me", link: "" },
  { icon: <HiOutlinePresentationChartLine />, title: "Projects", link: "" },
  // { icon: <RiArticleLine />, title: "Articles", link: "" }, //disable article section for now
  { icon: <TiContacts />, title: "Contacts", link: "" },
];

const rightSideNavItems = [
  {
    icon: <AiOutlineInstagram />,
    title: "Instagram",
    link: "https://www.instagram.com/jaber.fathi_",
  },
  {
    icon: <AiOutlineLinkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jaber-fathi-6415a5246/",
  },
  {
    icon: <SiCodewars />,
    title: "CodeWars",
    link: "https://www.codewars.com/",
  },
  {
    icon: <FiGithub />,
    title: "GitHub",
    link: "https://github.com/jaberowski?tab=repositories",
  },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState("Home");
  console.log(currentSection);

  return (
    <div className="relative overflow-x-hidden">
      {/* media breaks show */}

      {/* <div className="absolute w-14 h-14 bg-gray-400 rounded-full top-2 text-3xl flex justify-center items-center">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div> */}

      {/* media breaks show */}
      <div className="w-full md:w-[88%] mx-auto">
        <HomeSection setCurrentSection={setCurrentSection} />
        <AboutMeSection setCurrentSection={setCurrentSection} />
        <ProjectsSection setCurrentSection={setCurrentSection} />
        {/* <Section  //disable article section for now
          className="h-screen flex justify-center items-center"
          id="Articles"
          setCurrentSection={setCurrentSection}
        >
          Articles
        </Section> */}
        <ContactsSection
          setCurrentSection={setCurrentSection}
          items={rightSideNavItems}
        />
      </div>

      <SideNav
        items={leftSideNavItems}
        position="left"
        currentLink={currentSection}
      />
      <SocialSide items={rightSideNavItems} position="right" />
    </div>
  );
}
