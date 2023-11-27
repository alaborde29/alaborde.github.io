// components/ShaderPlane.js
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import glsl from 'glslify';

const vertexShader = /* glsl */ `
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float objectOpacity;
  uniform float randomSeed;
  uniform float noisePower;
  uniform float pixelRatio;
  uniform float time;
  uniform vec2 resolution;
  varying vec3 vPosition;

  // ... (Paste the rest of your GLSL shader code here)

  void main(void) {
    // ... (Paste the rest of your GLSL shader main function here)

    gl_FragColor = vec4(resColor, 1.0) * objectOpacity;
  }
`;

const ShaderPlane = () => {
  const planeRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;
    planeRef.current.material.uniforms.time.value = elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[5, 5, 32, 32]} />
      <shaderMaterial
        ref={planeRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          objectOpacity: { value: 1.0 },
          randomSeed: { value: Math.random() },
          noisePower: { value: 1.0 },
          pixelRatio: { value: window.devicePixelRatio },
          time: { value: 0.0 },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
      />
    </mesh>
  );
};

export default ShaderPlane;
