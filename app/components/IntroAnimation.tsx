'use client'
import { useEffect, useState } from 'react';
import { introAnimation, headerAnimation } from '../animations';

const IntroAnimation = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const intro = introAnimation(() => {
      setIntroComplete(true);
      startHeaderAnimation();
    });

    intro.play();

    return () => {
      intro.kill();
    };
  }, []);

  const startHeaderAnimation = () => {
    const header = headerAnimation();
    header.play();

    // Clean up header animation on component unmount
    return () => {
      header.kill();
    };
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className={`absolute inset-0 bg-black transition-opacity ${introComplete ? 'opacity-0' : 'opacity-1'} duration-1000`}></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="text-center text-4xl font-bold">
          <div className="text1 relative justify-center items-center">Hello</div>
          <div className="text2 relative justify-center items-center invisible">and Welcome.</div>
          <div className="text3 relative justify-center items-center invisible text-8xl">A.L</div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;

