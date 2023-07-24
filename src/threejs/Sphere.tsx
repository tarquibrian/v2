import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";

const Sphere = () => {
  const mesh = useRef<any>();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color: {
        value: [0.6, 0.6, 0.6],
      },
      colorBase: {
        value: [0.6, 0.6, 0.6],
      },
      colorDeep: {
        value: [0.85, 0.85, 0.85],
      },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  const myShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragment,
    vertexShader: vertex,
    side: THREE.DoubleSide,
  });

  useFrame(() => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.009;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 32, 32]} attach="geometry" />
      <primitive object={myShader} attach="material" />
    </mesh>
  );
};

export default Sphere;
