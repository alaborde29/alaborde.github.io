'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Physics2DPlugin } from 'gsap/all';

// Register the Physics2DPlugin with GSAP
gsap.registerPlugin(Physics2DPlugin);

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Set initial cursor position
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    // Set up GSAP timeline
    const tl = gsap.timeline({ onUpdate: updateCursor });

    // Physics-based animation
    tl.to({}, { duration: 0.1, repeat: -1, onRepeat: updatePhysics });

    function updatePhysics() {
      const targetX = gsap.getProperty(cursor, 'x');
      const targetY = gsap.getProperty(cursor, 'y');

      gsap.to(cursor, {
        physics2D: { velocity: (currentX - targetX) * 0.5, angle: 0, gravity: 200 },
        x: targetX,
        y: targetY,
        duration: 1,
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
    const onMouseMove = (e) => {
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