import { useThree } from '@react-three/fiber'
import React, { useMemo } from 'react'
import BgVertex from '@/shaders/BgVertex.glsl'
import BgFragment from '@/shaders/BgFragment.glsl'
import * as THREE from 'three';

const BgSection = () => {
  const {viewport} = useThree();

  const uniforms = useMemo(() => ({
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uGridSize:   { value: 40.0 },   // change grid spacing
  uLineWidth:  { value: 1.2 }     // change line thickness
}), []);

  return (
    <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <shaderMaterial
         vertexShader={BgVertex}
         fragmentShader={BgFragment}
         uniforms={uniforms}
        />
    </mesh>
  )
}

export default BgSection