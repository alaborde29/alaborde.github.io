'use client'
import React, { useEffect } from 'react';
import { headerAnimation } from '../animations';

export default function Header() {
  useEffect(() => {
    const animation = headerAnimation();
    animation.play();

    // Clean up animation on component unmount
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="text-8xl -ml-48 reveal-text">Alexandre</div>
        <div className="text-8xl ml-48 reveal-text">Laborde</div>
        <div className="text-3xl mt-10 relative">
          <div className="curtain absolute top-0 bottom-0 right-0 bg-black"></div>
          <div style={{ zIndex: 2 }}>Software Developer</div>
        </div>
      </div>
    </div>
  );
}

