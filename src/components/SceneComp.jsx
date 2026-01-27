import { useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {Vertex ,Fragment } from "@/components/shaders/FRAGVERT";
import gsap from "gsap";
import * as THREE from "three";

const SceneComp = () => {
  const { viewport } = useThree();
  const meshRef = useRef();
  const materialRef = useRef();

  // Uniforms for shader
  const uniforms = useMemo(
    () => ({
      uCurveStrength: { value: 0.0 }, // starting value
    }),
    []
  );

  const [endSize, setEndSize] = useState({ width: 400, height: 450 });

  // Update GSAP animations
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const startSize = { width: viewport.width, height: viewport.height };
    
    const tl = gsap.timeline({ delay: 5.5 });

    tl.to(
      uniforms.uCurveStrength,
      {
        value: 80,
        duration: 0.5,
        ease: "ease.in",
      },
      "a1"
    );
    tl.to(
      uniforms.uCurveStrength,
      {
        value: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "ease.in",
      },
      "a1"
    );

    // Scale animation instead of geometry rebuild
    tl.to(
      mesh.scale,
      {
        x: endSize.width / viewport.width,
        y: endSize.height / viewport.height,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
      },
      "a1"
    );

    gsap.to(meshRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      delay: 8,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
      if (mesh.geometry) mesh.geometry.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, [viewport, uniforms]);


  useEffect(()=>{
    if(window.innerWidth < 700){
      setEndSize({ width: 250, height: 300 })
    }
  },[])

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height, 40, 40]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={Vertex}
        fragmentShader={Fragment}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default SceneComp;
