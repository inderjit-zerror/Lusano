'use client'
import { Canvas } from "@react-three/fiber"
import SceneComp from "./SceneComp"
import { useEffect, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from 'gsap'
import BgSection from "./BgSection";

const CanvasComp = () => {
  const distance = 200;
  const [fov, setfov] = useState(75);

  useEffect(()=>{
    const FovCalculator = () => {
        setfov(2 * Math.atan((window.innerHeight / 2)/distance) * (180/Math.PI));
    }

    FovCalculator();

    window.addEventListener('resize', FovCalculator);
    return ()=> window.removeEventListener('resize', FovCalculator);
  },[])

  useEffect(()=>{
    gsap.to('.SempleIMGdiv',{
      opacity:1,
      delay:7,
    })
  },[])

  return (
    <div className='w-full h-screen fixed top-0 left-0 z-40'>
        <Canvas className="w-full h-full "
         gl={{ antialias: false }}
         dpr={[1, 1]}
        >
          <PerspectiveCamera makeDefault fov={fov} position={[0,0,distance]} />
          <BgSection />
          <SceneComp />

        </Canvas>

        {/* Top - Canvas - Part */}
        <div className="w-full h-screen fixed top-0 left-0 z-80 overflow-hidden  flex justify-center items-center">

          <div className="w-[400px] h-[450px] SempleIMGdiv overflow-hidden opacity-0 ">
            <img src={`/img/brickImg.avif`} alt="P" className="w-full h-full object-cover object-center" />
          </div>

        </div>
    </div>
  )
}

export default CanvasComp