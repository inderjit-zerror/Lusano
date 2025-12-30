import { useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import Vertex from "@/shaders/Vertex.glsl";
import Fragment from "@/shaders/Fragment.glsl";
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

  // Update GSAP animations
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const startSize = { width: viewport.width, height: viewport.height };
    const endSize = { width: 400, height: 450 };
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
    // tl.to(startSize, {
    //   width: endSize.width,
    //   height: endSize.height,
    //   duration: 0.5,
    //   ease: 'ease.in',
    //   onUpdate: () => {
    //     mesh.geometry.dispose() // dispose previous geometry
    //     mesh.geometry = new THREE.PlaneGeometry(
    //       startSize.width,
    //       startSize.height,
    //       100,
    //       100
    //     )
    // }
    // },'a1')

    // Scale animation instead of geometry rebuild
    tl.to(
      mesh.scale,
      {
        x: 400 / viewport.width,
        y: 450 / viewport.height,
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
