'use client'
import React, { useEffect } from 'react';
import { headerAnimation, textBounce, fadeIn } from '../animations';
import HeaderBackground from './HeaderBackground';
import { Canvas } from '@react-three/fiber';

export default function Header() {
  useEffect(() => {
    const animation = headerAnimation();
    const textbounce = textBounce();
    const fadein = fadeIn();
    // textbounce.delay(1)
    // animation.play();
    // textbounce.play();
    // fadein.play()

    // Clean up animation on component unmount
    return () => {
      animation.kill();
      fadein.kill();
      textbounce.kill();
    };
  }, []);

  return (
    <div>
      <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        className='fade-in invisible'>
        <HeaderBackground />
      </Canvas>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="text-8xl -ml-48 reveal-text invisible">Alexandre</div>
          <div className="text-8xl ml-48 reveal-text invisible">Laborde</div>
          <div className="text-3xl mt-10 relative">
            <div className="absolute top-0 bottom-0 right-0 bg-black"></div>
            <div style={{ zIndex: 2 }} className='undertext invisible'>Software Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

