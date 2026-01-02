"use client";
import { Canvas } from "@react-three/fiber";
import SceneComp from "./SceneComp";
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import BgSection from "./BgSection";
import NavBox from "./common/NavBox";
import { Link } from "next-view-transitions";

const CanvasComp = ({ SetCName }) => {
  const distance = 200;
  const [fov, setfov] = useState(75);

  useEffect(() => {
    const FovCalculator = () => {
      setfov(
        2 * Math.atan(window.innerHeight / 2 / distance) * (180 / Math.PI)
      );
    };

    FovCalculator();

    window.addEventListener("resize", FovCalculator);
    return () => window.removeEventListener("resize", FovCalculator);
  }, []);

  useEffect(() => {
    const tlS = gsap.timeline();
    tlS.to(".SempleIMGdiv", {
      opacity: 1,
      delay: 7,
    });

    const targetCell = document.querySelector(".grid-cell");

    if (!targetCell) return;

    const cellRect = targetCell.getBoundingClientRect();

    tlS.to(".grid-cell", {
      opacity: 1,
      stagger: 0.0002,
      ease: "ease.Out",
    });

    tlS.to(".SempleIMGdiv", {
      opacity: 1,
      delay: 1,
      width: cellRect.width,
      height: cellRect.height,
      duration: 1,
      ease: "power4.inOut",
    });

    tlS.to(".SempleIMGdiv", {
      opacity: 0,
      ease: "ease.Out",
      onComplete:()=>{
        const smallTL = gsap.timeline();
        smallTL.to('.NBOX',{
          opacity:1,
        },'S1')
        smallTL.to('.TextHeaderCont',{
          opacity:1,
        },'S1')
        startMouseTracking()
      }
    });
  }, []);

  // ---- Your Image Array (11 images) ----
  const images = [
    "/productImg/img1.jpg",
    "/productImg/img2.jpg",
    "/productImg/img3.jpg",
    "/productImg/img4.jpg",
    "/productImg/img5.jpg",
    "/productImg/img6.jpg",
    "/productImg/img7.jpg",
    "/productImg/img8.jpg",
    "/productImg/img9.jpg",
    "/productImg/img10.jpg",
    "/productImg/img11.jpg",
    "/productImg/img12.jpg",
    "/productImg/img13.jpg",
    "/productImg/img14.jpg",
    "/productImg/img15.jpg",
    "/productImg/img16.jpg",
    "/productImg/img1.jpg",
    "/productImg/img2.jpg",
    "/productImg/img3.jpg",
    "/productImg/img4.jpg",
    "/productImg/img5.jpg",
    "/productImg/img6.jpg",
    "/productImg/img7.jpg",
    "/productImg/img8.jpg",
    "/productImg/img9.jpg",
    "/productImg/img10.jpg",
    "/productImg/img11.jpg",
    "/productImg/img12.jpg",
    "/productImg/img13.jpg",
    "/productImg/img14.jpg",
    "/productImg/img15.jpg",
    "/productImg/img16.jpg",
    "/productImg/img1.jpg",
    "/productImg/img2.jpg",
    "/productImg/img3.jpg",
    "/productImg/img4.jpg",
    "/productImg/img5.jpg",
    "/productImg/img6.jpg",
    "/productImg/img7.jpg",
    "/productImg/img8.jpg",
    "/productImg/img9.jpg",
    "/productImg/img10.jpg",
    "/productImg/img11.jpg",
    "/productImg/img12.jpg",
  ];

  const imagePositions = [
    3, 7, 12, 18, 21, 25, 29, 33, 38, 42, 46, 51, 55, 59, 63, 68, 72, 77, 81,
    85, 90, 94, 99, 103, 107, 112, 116, 121, 125, 129, 134, 138, 143, 147, 151,
    156, 160, 165, 169, 174, 178, 183, 187, 192,
  ];

  // ------------------------------------------------------
  const gridRef = useRef(null);
  // ------------------- Smooth Mouse Tracking -------------------

  const startMouseTracking = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const state = { x: 0, y: 0 }; // target values

    // Initialize current to current grid position so it doesn't snap
    const computedStyle = window.getComputedStyle(grid);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const current = { x: matrix.m41 || 0, y: matrix.m42 || 0 }; // lerp values

    const lerpFactor = 0.01;

    const updatePosition = () => {
      current.x += (state.x - current.x) * lerpFactor;
      current.y += (state.y - current.y) * lerpFactor;

      gsap.set(grid, {
        x: current.x,
        y: current.y,
      });

      requestAnimationFrame(updatePosition);
    };
    updatePosition();

    const onMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;

      const maxOffsetX = (grid.offsetWidth - window.innerWidth) / 2;
      const maxOffsetY = (grid.offsetHeight - window.innerHeight) / 2;

      state.x = -moveX * maxOffsetX;
      state.y = -moveY * maxOffsetY;
    };

    window.addEventListener("mousemove", onMouseMove);
  };

  //  -----------------------------------------------------------------------
  const DivMouseEnter = (item) => {
    SetCName("Image Name");
    gsap.to(item, {
      scale: 1.4,
      direction: 0.5,
      ease: "ease.out",
    });
  };
  const DivMouseLeave = (item) => {
    SetCName("");
    gsap.to(item, {
      scale: 1,
      direction: 0.5,
      ease: "ease.out",
    });
  };

  //  -----------------------------------------------------------------------

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-40">

    

      <Canvas className="w-full h-full " gl={{ antialias: false }} dpr={[1, 1]}>
        <PerspectiveCamera makeDefault fov={fov} position={[0, 0, distance]} />
        <BgSection />
        <SceneComp />
      </Canvas>

      {/* Top Layer */}
      <div className="w-full h-screen fixed top-0 left-0 z-80 overflow-hidden  flex justify-center items-center">
        <div className="w-[400px] h-[450px] z-100 SempleIMGdiv overflow-hidden pointer-events-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <img
            src={`/productImg/img10.jpg`}
            alt="P"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* --- PERFECT SQUARE GRID 12x12 --- */}
        <div
          ref={gridRef}
          className="w-[200vw] aspect-square grid grid-cols-15  mx-auto shrink-0 gap-[2rem] select-none"
        >
          {Array.from({ length: 15 * 15 }).map((_, i) => {
            const imgIndex = imagePositions.indexOf(i);
            const hasImage = imgIndex !== -1;
            return (
              <div
                key={i}
                // 👉 Only attach hover events if this cell contains an image
                onMouseEnter={
                  hasImage ? () => DivMouseEnter(`.div${i}`) : undefined
                }
                onMouseLeave={
                  hasImage ? () => DivMouseLeave(`.div${i}`) : undefined
                }
                className={`aspect-square grid-cell opacity-0  div${i} overflow-hidden ${imgIndex}`}
              >
                {imgIndex !== -1 && (
                  <Link href="/project/name"> 
                  <img
                    src={images[imgIndex]}
                    className="w-full h-full object-cover"
                  />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CanvasComp;
