import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const MobileOpenSection = () => {
  useEffect(() => {
    const tlA = gsap.timeline();
    tlA.to(
      ".animateDiv1",
      {
        height: 0,
        delay:1.5,
        duration: 1,
        ease: "power3.inOut",
      },
      "a1t",
    );
    tlA.fromTo(
      ".AnimateCont2",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        delay:1.5,
        opacity: 1,
        ease: "power3.inOut",
        duration: 1,
      },
      "a1t",
    );
  }, []);

  return (
    <div className="min-h-screen pt-[60px] bg-[#FBF7F2] text-[#4A2A1A] font-serif">
      {/* Top Bar */}
      <div className="flex justify-between AnimateCont2 items-center px-4 py-4 text-[10px] tracking-wide">
        <Link href={'/'}><button className="underline underline-offset-4">Close</button></Link>

        <div className="flex gap-6 italic">
          <span>Style</span>
          <span>Chairs</span>
        </div>

        <span className="tracking-widest">001 — 004</span>
      </div>

      {/* Image Section */}
      <div className="px-4 mt-5">
        <div className="bg-[#E7D7C3] relative">
          <img
            src="/productImg/img9.jpg"
            alt="Marmont Dining Chair"
            className="w-full max-w-[420px] mx-auto  object-contain"
          />

          {/* animation div for image  */}
          <div className=" animateDiv1 w-full h-full absolute top-0 left-0 bg-[#FBF7F2]"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 mt-5 AnimateCont2">
        <h1 className="text-4xl Font2 leading-tight mb-6">
          Marmont Dining Chair
        </h1>

        {/* Meta */}
        <div className="flex justify-between text-sm italic mb-4">
          <span>Style</span>
          <span>M.02</span>
        </div>

        <hr className="border-[#C9B6A3]" />

        {/* Details */}
        <div className="space-y-4 mt-4 text-sm AnimateCont2">
          <div className="flex justify-between">
            <span className="italic">Dimensions</span>
            <span>24"W x 22"D x 33"H x 18.5"SH</span>
          </div>

          <hr className="border-[#C9B6A3]" />

          <div className="flex justify-between">
            <span className="italic">COM / COL</span>
            <span>1.5 YDS / 27 SF</span>
          </div>

          <hr className="border-[#C9B6A3]" />

          <div className="flex justify-between items-center">
            <span className="italic">Materials</span>
            <button className="text-lg font-light">+</button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 mt-10 pb-10 AnimateCont2 ">
        <button className="w-full bg-[#4A2A1A] text-[#FBF7F2] py-4 tracking-wide hover:opacity-90 transition">
          Inquire About Product
        </button>
      </div>

      {/* Part 2 */}

      <section className="bg-[#FBF7F2] text-[#4A2A1A] mt-20 font-serif px-6 pb-24">
        {/* Top Links */}
        <div className="flex justify-between items-center pt-16 text-sm">
          <button className="underline underline-offset-4">
            Download Spec Sheet
          </button>

          <button className="underline underline-offset-4">Finishes</button>
        </div>

        {/* Info Header */}
        <div className="mt-14">
          <span className="italic text-sm">info</span>
          <div className="h-px bg-[#4A2A1A] mt-3" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-5 max-w-2xl leading-relaxed Font2 text-[14px] leading-[14px] ">
          <p>
            Mid-century grace reimagined. Hand-sculpted wood embraces tailored
            seat and backrests; comfort refined into a sculptural,
            heirloom-quality silhouette.
          </p>

          <p>
            Unique work. Limited Edition 250. Serial Number and Certificate of
            Authenticity. Year 2025. Hand Sculpted in Los Angeles.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#4A2A1A] mt-4" />

        {/* Next Product */}
        <div className="mt-20 text-center">
          <span className="italic text-sm">Next Product</span>

          <div className="mt-6 flex justify-center">
            <div className=" p-6">
              <img
                src="/productImg/img10.jpg"
                alt="Next Product"
                className="w-[160px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileOpenSection;
