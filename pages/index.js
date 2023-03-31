import SideNav from "@/components/SideNav";
import setupSvg from "../public/images/setup.svg";
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

const leftSideNavItems = [
  { icon: <HiOutlineHome />, title: "Home", link: "" },
  { icon: <HiOutlineUserCircle />, title: "About Me", link: "" },
  { icon: <HiOutlinePresentationChartLine />, title: "Projects", link: "" },
  { icon: <RiArticleLine />, title: "Articles", link: "" },
  { icon: <TiContacts />, title: "Contacts", link: "" },
];

const rightSideNavItems = [
  { icon: <AiOutlineInstagram />, title: "Instagram", link: "" },
  { icon: <AiOutlineLinkedin />, title: "LinkedIn", link: "" },
  { icon: <FiGithub />, title: "GitHub", link: "" },
  { icon: <SiCodewars />, title: "CodeWars", link: "" },
];

export default function Home() {
  return (
    <div className="">
      <section className="h-screen" id="Home">
        <div className="navbar h-[8vh] border-b-2 border-black px-8 flex justify-between items-center list-none ">
          <h1 className="text-3xl font-extrabold font-alkatra text-[#6c04f4]">
            {"<Jf />"}
          </h1>
          <div className="flex w-1/6 justify-between">
            <li className="self-center">Blog</li>
            <li className="border-2 border-[#6c04f4] p-3 rounded-3xl text-[#6c04f4] hover:bg-[#6c04f4] hover:text-white font-medium transition-all duration-300">
              Contact
            </li>
          </div>
        </div>
        <div className="h-[92vh]  p-5">
          <div className=" flex flex-col gap-6 w-1/2 mx-auto text-center items-center">
            <h4 className="text-xl">Hi My Name is</h4>
            <h1 className="text-6xl">Jaber Fathi</h1>
            <h1 className="text-6xl">I Build Thing For Web</h1>
            <p className="w-4/6">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. currently, I'm focused
              on building accessible, human-centered products at digikala
            </p>
            <button className="text-2xl self-center border-2 p-3 border-black rounded-lg">
              Check out my resume
            </button>
          </div>
          <div>
            <img src={setupSvg} alt="" />
          </div>
        </div>
      </section>
      <section
        className="h-screen flex justify-center items-center"
        id="AboutMe"
      >
        About Me
      </section>
      <section
        className="h-screen flex justify-center items-center"
        id="Projects"
      >
        Projects
      </section>
      <section
        className="h-screen flex justify-center items-center"
        id="Articles"
      >
        Articles
      </section>
      <section
        className="h-screen flex justify-center items-center"
        id="Contacts"
      >
        Contacts
      </section>
      <SideNav items={leftSideNavItems} position="left" />
      <SideNav items={rightSideNavItems} position="right" />
    </div>
  );
}
