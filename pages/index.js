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

const leftSideNavItems = [
  { icon: <HiOutlineHome />, title: "Home", link: "" },
  { icon: <HiOutlineUserCircle />, title: "About Me", link: "" },
  { icon: <HiOutlinePresentationChartLine />, title: "Projects", link: "" },
  { icon: <RiArticleLine />, title: "Articles", link: "" },
  { icon: <TiContacts />, title: "Contacts", link: "" },
];

const rightSideNavItems = [
  {
    icon: <AiOutlineInstagram />,
    title: "Instagram",
    link: "https://www.tarafdari.com/",
  },
  { icon: <AiOutlineLinkedin />, title: "LinkedIn", link: "" },
  { icon: <FiGithub />, title: "GitHub", link: "" },
  { icon: <SiCodewars />, title: "CodeWars", link: "" },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState("Home");
  console.log(currentSection);

  return (
    <div className="">
      <HomeSection setCurrentSection={setCurrentSection} />
      <AboutMeSection setCurrentSection={setCurrentSection} />
      <ProjectsSection setCurrentSection={setCurrentSection} />

      {/* <Section
        className="h-screen flex justify-center items-center"
        id="Projects"
        setCurrentSection={setCurrentSection}
      >
        Projects
      </Section> */}
      <Section
        className="h-screen flex justify-center items-center"
        id="Articles"
        setCurrentSection={setCurrentSection}
      >
        Articles
      </Section>
      <Section
        className="h-screen flex justify-center items-center"
        id="Contacts"
        setCurrentSection={setCurrentSection}
      >
        Contacts
      </Section>
      <SideNav
        items={leftSideNavItems}
        position="left"
        currentLink={currentSection}
      />
      <SocialSide items={rightSideNavItems} position="right" />
    </div>
  );
}
