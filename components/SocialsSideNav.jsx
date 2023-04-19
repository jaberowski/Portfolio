import { motion } from "framer-motion";

function SocialSide({ items }) {
  return (
    <motion.div
      className={`hidden md:flex flex-col items-center fixed bottom-0 list-none right-[2%] translate-x-1/2 gap-5 text-black`}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {items.map((item, index) => {
        return (
          <a href={item.link} key={index} target="_blank" title={item.title}>
            <div className="relative group">
              <div className="text-2xl ">{item.icon}</div>
            </div>
          </a>
        );
      })}
      <li className="w-1 h-48 bg-black rounded-sm"></li>
    </motion.div>
  );
}

export default SocialSide;
