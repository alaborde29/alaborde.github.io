'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Physics2DPlugin } from 'gsap/all';

gsap.registerPlugin(Physics2DPlugin);

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor: any = cursorRef.current;

    // Set initial cursor position
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    // Set up GSAP timeline
    const tl = gsap.timeline({ onUpdate: updateCursor });

    // Physics-based animation
    tl.to({}, { duration: 0.1, repeat: -1, onRepeat: updatePhysics });

    function updatePhysics() {
      const targetX: any = gsap.getProperty(cursor, 'x');
      const targetY: any = gsap.getProperty(cursor, 'y');
    
      gsap.to(cursor, {
        x: targetX,
        y: targetY,
        duration: 1,
        ease: 'power1.out', // Optional ease for the motion
      });
    
      currentX = targetX;
      currentY = targetY;
    }
    

    function updateCursor() {
      const cursorX = gsap.getProperty(cursor, 'x');
      const cursorY = gsap.getProperty(cursor, 'y');

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }

    // Mousemove event to update cursor position
    const onMouseMove = (e: any) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;