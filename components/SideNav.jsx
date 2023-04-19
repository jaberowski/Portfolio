import { motion } from "framer-motion";

function SideNav({ items, currentLink }) {
  return (
    <motion.div
      className="hidden md:flex flex-col items-center fixed bottom-0 list-none  md:left-[2%] translate-x-1/2 gap-5 text-black"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {items.map((item, index) => {
        const isActive =
          item.title.replace(" ", "").toLowerCase() ===
          currentLink.toLowerCase();
        return (
          <a
            href={`#${item.title.replace(" ", "")}`}
            key={index}
            title={item.title}
          >
            <div
              className={`relative flex flex-col items-center group transition duration-300  ${
                isActive && "scale-125 text-primary_dark my-2"
              } `}
            >
              <div className="text-2xl ">{item.icon}</div>
            </div>
          </a>
        );
      })}
      <li className="w-1 h-48 bg-black rounded-sm"></li>
    </motion.div>
  );
}

export default SideNav;
