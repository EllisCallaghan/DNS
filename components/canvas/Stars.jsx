"use client"
import {useState, useRef, Suspense} from 'react';
import {Canvas,useFrame } from '@react-three/fiber';
import {Points,PointMaterial,Preload} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Sphere } from 'three';

const Stars = (props) => {
  const ref= useRef();

  const sphere = random.inSphere(new Float32Array(1000),{radius:1.2})
  useFrame((state,delta) => {
    ref.current.rotation.x -= delta/20;
    ref.current.rotation.y -= delta/10;

  })
  return (
    <group rotation={[0,0,Math.PI /3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.003} sizeAttentuation={true} depthWrite={false}/>
      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] bg-[#070E27]'>
      <Canvas camera={{position:[0,0 ,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  )
}
export default StarsCanvas