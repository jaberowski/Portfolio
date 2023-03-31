function SideNav({ items, position }) {
  const oposite = position === "right" ? "left" : "right";

  return (
    <div
      className={` flex flex-col items-center fixed bottom-0 list-none ${position}-10 gap-5 text-gray-700`}
    >
      {items.map((item, index) => {
        return (
          <a href={`#${item.title.replace(" ", "")}`} key={index}>
            <div className="relative group">
              <div className="text-2xl group-hover:text-black">{item.icon}</div>
              <h3
                className={
                  "absolute text-xl top-1/2 -translate-y-1/2  px-3 hidden  group-hover:block group-hover:text-black whitespace-nowrap" +
                  " ".concat(
                    position === "left" ? "left-[100%]" : "right-[100%]"
                  )
                }
              >
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