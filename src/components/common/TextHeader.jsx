import React from "react";

const TextHeader = () => {
  return (
    <div className="w-full flex TextHeaderCont opacity-0 items-center fixed bottom-2 left-0 justify-between px-10 py-6 z-100">

      {/* Left — 50% */}
      <div className="text-[#5a3823] text-[18px] font-serif">
        50%
      </div>

      {/* Center — Menu */}
      <div className="flex  flex-col items-center absolute left-1/2 -translate-x-1/2 text-[#b69d8d] font-serif italic text-[15px]">

      <div className="flex w-fit h-fit gap-2 m-auto">
        <span className="hover:text-[#5a3823] select-none cursor-pointer">All</span>
        <span className=" select-none" >/</span>
        <span className="hover:text-[#5a3823] select-none cursor-pointer">Sleep</span>
        <span className=" select-none" >/</span>
        <span className="hover:text-[#5a3823] select-none cursor-pointer">Live</span>
        <span className=" select-none" >/</span>
        <span className="hover:text-[#5a3823] select-none cursor-pointer">Eat</span>
        <span className=" select-none" >/</span>
        <span className="hover:text-[#5a3823] select-none cursor-pointer">Work</span>
      </div>

        {/* Right — [+ | -] */}
      <div className="font-serif text-[#5a3823] text-[18px] select-none cursor-pointer">
        [ + | - ]
      </div>
      </div>

      

    </div>
  );
};

export default TextHeader;