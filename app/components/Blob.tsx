import React, { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Icosahedron, shaderMaterial } from "@react-three/drei";
import vertexShader from "../../public/shaders/vertex"
import fragmentShader from "../../public/shaders/fragment"
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const Blob = () => {
  // reference for mesh
  const mesh = useRef();
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        0.15,
        0.02
      );
    }
  });
  return (
    
      <mesh
        ref={mesh}
        scale={1.5}
        position={[0, 0, 0]}
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
        {/* <Icosahedron args={[2, 20]} /> */}
        <icosahedronGeometry args={[2, 20]}/>
      </mesh>
  );
};

export default Blob;
