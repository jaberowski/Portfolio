import { motion } from "framer-motion";

function SideNav({ items, currentLink }) {
  return (
    <motion.div
      className="flex flex-col items-center fixed bottom-0 list-none left-10 gap-5 text-black "
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {items.map((item, index) => {
        const isActive =
          item.title.replace(" ", "").toLowerCase() ===
          currentLink.toLowerCase();
        return (
          <a href={`#${item.title.replace(" ", "")}`} key={index}>
            <div
              className={`relative group transition duration-300 ${
                isActive && "scale-125 text-[#6c04f4] my-2 "
              } `}
            >
              <div className="text-2xl ">{item.icon}</div>
              <h3 className="absolute text-xl top-1/2 -translate-y-1/2  px-3 hidden  group-hover:block whitespace-nowrap left-[100%]">
                {item.title}
              </h3>
            </div>
          </a>
        );
      })}
      <li className="w-1 h-48 bg-black rounded-sm"></li>
    </motion.div>
  );
}

export default SideNav;
