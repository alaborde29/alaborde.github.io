'use client'
import React, { useEffect } from 'react';
import { headerAnimation, textBounce, fadeIn } from '../animations';
import { Element } from 'react-scroll';
import HeaderBackground from './HeaderBackground';
import { Canvas } from '@react-three/fiber';
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation('translation');

  useEffect(() => {
    const animation = headerAnimation();
    const textbounce = textBounce();
    const fadein = fadeIn();
    return () => {
      animation.kill();
      fadein.kill();
      textbounce.kill();
    };
  }, []);

  return (
    <Element name='header'>
      <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        className='fade-in invisible '>
        <HeaderBackground />
      </Canvas>
      <div className="
        h-screen w-screen flex justify-center items-center select-none
      ">
        <div className="
          flex flex-col justify-center items-center p-4 text-white
        ">
          <div className="
            text-6xl -ml-14 font-bold
            md:text-7xl -md:ml-48 
            lg:text-8xl lg:-ml-30 
            reveal-text invisible
          ">Alexandre</div>
          <div className=" 
            text-6xl ml-24 font-bold
            md:text-7xl md:ml-36
            lg:text-8xl lg:ml-40
            reveal-text invisible
          ">Laborde</div>
          <div className="
            text-xl mt-6
            md:mt-10 md:text-2xl
            lg:text-4xl lg:mt-16
            relative
          ">
            <div className="absolute top-0 bottom-0 right-0 bg-black"></div>
            <div style={{ zIndex: 2 }} className={"undertext ${animation.isActive() ? 'reveal-text' : 'invisible'}"}>{t("headerTitle")}</div>
          </div>
        </div>
      </div>
    </Element>
  );
}

