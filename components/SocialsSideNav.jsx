import { motion } from "framer-motion";

function SocialSide({ items }) {
  return (
    <motion.div
      className={` flex flex-col items-center fixed bottom-0 list-none right-10 gap-5 text-black`}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {items.map((item, index) => {
        return (
          <a href={item.link} key={index} target="_blank">
            <div className="relative group">
              <div className="text-2xl ">{item.icon}</div>
              <h3
                className={
                  "absolute text-xl top-1/2 -translate-y-1/2  px-3 hidden  group-hover:block  whitespace-nowrap right-[100%]"
                }
              >
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

export default SocialSide;
