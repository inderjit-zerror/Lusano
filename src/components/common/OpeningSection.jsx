"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const ProductIntroR = ({ numberRef }) => {
  return (
    <div className="w-1/4.1 h-screen  absolute flex flex-col justify-end items-end top-0 right-0 bg-[#f8f5f1] text-[#5a3823] px-8 py-10 font-serif">

      {/* Page Index Right */}
      <div className="absolute top-20 right-10 text-xs tracking-wider text-gray-500">
        001 - 004
      </div>

      {/* Scroll Note */}
      <div className="absolute top-30 right-10 italic text-sm text-gray-600">
        (Scroll)
      </div>

      {/* Big Number Left */}
      <div
       ref={numberRef}
      className="absolute top-[10%] Font2 left-16 text-5xl font-light tracking-widest">
        01
      </div>

      {/* Title Section */}
      <div className=" w-full max-w-lg ">
        <h1 className="text-4xl md:text-5xl leading-tight font-light">
          Grant Armless <br /> Chaise
        </h1>

        {/* Details */}
        <div className="mt-10 space-y-6">

          {/* Style */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="italic text-sm text-gray-600">Style</span>
            <span className="text-sm tracking-wider">G.03</span>
          </div>

          {/* Dimensions */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="italic text-sm text-gray-600">Dimensions</span>
            <span className="text-sm tracking-wider">
              32"W x 3.5"D x 62"H
            </span>
          </div>

          {/* Materials */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="italic text-sm text-gray-600">Materials</span>
            <div className="flex items-center gap-2 text-sm">
              <span>Options</span>
              <span className="text-lg leading-none">+</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 w-full bg-[#5a3823] text-white py-3 text-sm tracking-wide">
          Inquire About Product
        </button>
      </div>
    </div>
  );
};

const ProductDetailsL = () => {
  return (
    <div className="w-1/5 h-screen  text-[#5a3823] px-10 pb-12 pt-20 font-serif absolute top-0 left-0">

      {/* Close Button */}
      <button className="underline text-sm tracking-wide">
        Close
      </button>

      {/* i. Description */}
      <div className="mt-12 max-w-xl">
        <h3 className="italic mb-4">i.</h3>

        <p className="leading-relaxed text-[15px]">
          An elongated seat for deep rest.
          <br />
          Down-wrapped cushioning and modular form, defined by its
          calm proportions and seamless tailoring.
        </p>

        <p className="leading-relaxed text-[15px] mt-5">
          Serial Number and Certificate of Authenticity. Year 2025.
          <br />
          Handcrafted in Los Angeles.
        </p>
      </div>

      {/* ii. Material */}
      <div className="mt-20 max-w-xl">
        <h3 className="italic text-lg">ii. <span className="not-italic font-light">Natural Walnut</span></h3>
      </div>

      {/* Detail Image + Footer Links */}
      <div className="mt-24 w-full flex justify-between items-end  absolute bottom-0 left-0 pl-[20px] pb-[20px]">

        {/* (Detail) + Image */}
        <div>
          <p className="italic text-sm mb-2">(Detail)</p>

          <img
            src={`/productImg/img15.jpg`}
            alt="Detail"
            className="w-[150px] h-[150px] object-cover"
          />
        </div>

        {/* Footer Links */}
        <div className="flex Font2  items-center gap-3 text-sm ">
          <a href="#" className="underline flex items-center gap-1">
            DownloadSheet <span className="text-lg">↓</span>
          </a>

          <a href="#" className="underline">
            Finishes
          </a>
        </div>

      </div>

    </div>
  );
};


const OpeningSection = () => {

   const imgWrapRef = useRef(null);
   const numberRef = useRef(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;

    // Total scroll distance = (full height of images - viewport height)
    const totalScroll = wrap.scrollHeight - window.innerHeight;

    gsap.fromTo(
      wrap,
      { y: 0 },
      {
        y: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: ".opening-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    
  // -------------------------------------------------
  // FIX: Declare updateNumber BEFORE using it
  // -------------------------------------------------
  const updateNumber = (num) => {
    if (numberRef.current) {
      gsap.to(numberRef.current, {
        innerText: String(num).padStart(2, "0"),
        duration: 0.3,
        ease: "power2.out",
        snap: { innerText: 1 },
      });
    }
  };

  // ----- Image sections -----
  const imageBlocks = gsap.utils.toArray(".img-block");

  imageBlocks.forEach((block, index) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => updateNumber(index + 1),
      onEnterBack: () => updateNumber(index + 1),
    });
  });

  }, []);

  return (
    <div className="w-full h-[400vh] relative ">
      {/* Main Contant */}
      <div className="w-full h-screen overflow-hidden sticky top-0 left-0 flex justify-center items-center  ">
        <div className="w-1/3 h-screen  overflow-hidden pt-[100px]">
          {/* Image-Wrap-Cont */}
          <div ref={imgWrapRef} className="w-full h-fit flex flex-col gap-[20px]">
            {/* Img1 */}
            <div className="w-full h-[80vh] overflow-hidden flex  img-block">
              <img src={`/productImg/img10.jpg`} alt="P-IMG" className="w-full h-full object-cover object-center" />
            </div>
            {/* Img2 */}
            <div className="w-full h-[80vh] overflow-hidden flex  img-block">
              <img src={`/productImg/img15.jpg`} alt="P-IMG" className="w-full h-full object-cover object-center" />
            </div>
            {/* Img3 */}
            <div className="w-full h-[80vh] overflow-hidden flex  img-block">
              <img src={`/productImg/img1.jpg`} alt="P-IMG" className="w-full h-full object-cover object-center" />
            </div>
            {/* Img4 */}
            <div className="w-full h-[80vh] overflow-hidden flex  img-block">
              <img src={`/productImg/img6.jpg`} alt="P-IMG" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
        <ProductDetailsL  />
        <ProductIntroR numberRef={numberRef} />
      </div>
    </div>
  );
};

export default OpeningSection;
