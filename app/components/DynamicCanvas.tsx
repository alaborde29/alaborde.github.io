'use client'

import { Canvas } from 'react-three-fiber';
import ShaderPlane from './ShaderPlane';

const DynamicCanvas = () => {
  return (
    <Canvas>
      <ShaderPlane />
    </Canvas>
  );
};

export default DynamicCanvas;