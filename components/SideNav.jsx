import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

function SideNav() {
  const items = [
    { icon: <HiOutlineHome />, title: "Home", link: "" },
    { icon: <HiOutlineUserCircle />, title: "About Me", link: "" },
    { icon: <HiOutlinePresentationChartLine />, title: "Projects", link: "" },
    { icon: <RiArticleLine />, title: "Articles", link: "" },
    { icon: <TiContacts />, title: "Contacts", link: "" },
  ];

  return (
    <div className=" flex flex-col items-center fixed bottom-0 list-none left-10   gap-5 text-gray-700">
      {items.map((item) => {
        return (
          <a href={`#${item.title.replace(" ", "")}`}>
            <div className="relative group">
              <div className="text-2xl group-hover:text-black">{item.icon}</div>
              <h3 className="absolute text-xl top-1/2 -translate-y-1/2 left-[100%] px-3 hidden  group-hover:block group-hover:text-black w-48">
                {item.title}
              </h3>
            </div>
          </a>
        );
      })}
      <li className="w-1 h-48 bg-gray-700 rounded-sm"></li>
    </div>
  );
}

export default SideNav;
