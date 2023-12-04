// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useRef, useMemo, useState } from "react";
import vertexShader from "../../public/shaders/vertex"
import fragmentShader from "../../public/shaders/fragment"
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import * as THREE from 'three'
import { easing } from 'maath'

const Grid = ({ texture, positions = [], ...props }:any) => (
  <points {...props}>
    <pointsMaterial
      size={0.6}
      opacity={0.5}
      color="#316B74"
      alphaMap={texture}
      transparent
      depthWrite={false}
      blending={THREE.AdditiveBlending}
    />
    <bufferGeometry attach="geometry">
      <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={3} />
    </bufferGeometry>
  </points>
 )

const HeaderBackground = () => {
  // reference for mesh
  const mesh: any = useRef();
  const [ball] = useState(() => new THREE.Object3D())
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state, dt) => {
    const { clock } = state;
    ball.lookAt(state.pointer.x, state.pointer.y, 1)
    easing.dampQ(mesh.current.quaternion, ball.quaternion, 0.15, dt)
    if (mesh.current) {
      (mesh.current.material as any).uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

        (mesh.current.material as any).uniforms.u_intensity.value = MathUtils.lerp(
        (mesh.current.material as any).uniforms.u_intensity.value,
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
        <Grid/>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
        <icosahedronGeometry args={[2, 20]}/>
      </mesh>
  );
};

export default HeaderBackground;
