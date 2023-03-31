function SideNav({ items, position, currentLink }) {
  const oposite = position === "right" ? "left" : "right";

  const finalclass =
    position === "left"
      ? " flex flex-col items-center fixed bottom-0 list-none left-10 gap-5 text-gray-700"
      : " flex flex-col items-center fixed bottom-0 list-none right-10 gap-5 text-gray-700";

  return (
    <div className={finalclass}>
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
