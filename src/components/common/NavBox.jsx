"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { FiMenu } from "react-icons/fi";

const NavBox = () => {
  const boxRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // <-- ICON CONTROL

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(boxRef.current, {
        height: 245,
        duration: 0.5,
        ease: "ease.in",
      })
      .to(
        ".TT",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".NLW",
        {
          delay:0.1,
          width:'100%',
          duration: 0.5,
          stagger:0.05,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  const NavActivate = () => {
    setIsOpen(true);
    tl.current.play();
  };

  const NavDeActivate = () => {
    setIsOpen(false);
    tl.current.reverse();
  };

  const [navSt, SetNavSt] = useState(false)
  const Seter = () => {
    if(navSt == true){
      NavDeActivate()
    }else{
      NavActivate()
    }
  }

  return (
    <div
      onMouseEnter={NavActivate}
      onMouseLeave={NavDeActivate}
      onClick={Seter}
      className="fixed top-4  left-1/2 -translate-x-1/2 z-100 cursor-pointer NBOX opacity-0 text-[14px]"
    >
      <div
        ref={boxRef}
        className="w-[260px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.15)]"
        style={{ height: 35 }} // <-- controlled by GSAP
      >
        {/* Top Row PC/Laptop */}
        <div className="flex items-center max-sm:hidden justify-between mb-4 py-2 px-2">
          {/* ICON SWITCH */}
          {isOpen ? (
            <RxCross2  className="text-[14px] text-[#5a3823]" />
          ) : (
            <FiMenu  className="text-[14px] text-[#5a3823]" />
          )}
          <p className="text-sm font-medium text-[#5a3823] Font1">Home</p>
          <div className="w-[20px]"></div>
        </div>

        {/* Top Row Mobile */}
        <div  className="flex items-center sm:hidden items-center justify-between mb-4 py-2 px-4">

          <p className="text-sm font-medium text-[#5a3823] Font3"> ZERROR</p>
          <div  className="flex justify-center items-center gap-2">
            <p className="text-sm font-medium text-[#5a3823] Font1">Home</p>
            {/* ICON SWITCH */}
            {isOpen ? (
              <RxCross2  className="text-[14px] text-[#5a3823]" />
            ) : (
              <FiMenu  className="text-[14px] text-[#5a3823]" />
            )}
            {/* <div className="w-[20px]"></div> */}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 px-2">
          {[
            { num: "01", label: "Home" },
            { num: "02", label: "Products" },
            { num: "03", label: "About" },
            { num: "04", label: "Lifestyle" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-b TT opacity-0 border-[#5a3823]/40 pb-1 NLW group w-[0%]"
            >
              <p className="font-serif italic text-[#5a3823] whitespace-nowrap ">
                <span className="font-medium text-sm transition-all ease-in duration-200  group-hover:mr-[10px]">
                  ({item.num})
                </span>{" "}
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-between mt-5 px-3 pb-4 text-[#5a3823] italic font-serif">
          <span>em.</span>
          <span>鵼</span>
          <span>ig.</span>
        </div>
      </div>
    </div>
  );
};

export default NavBox;
