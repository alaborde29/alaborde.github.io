// animations.js
import gsap from 'gsap';

export const introAnimation = (onComplete) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.set('.text2, .text3', { visibility: 'hidden' })
    .to('.text1', { opacity: 0, filter: 'blur(0)', duration: 0 })
    .to('.text1', { opacity: 1, filter: 'blur(0)', duration: 1.5 })
    .to('.text1', { opacity: 0, filter: 'blur(10px)', duration: 1 })
    .to('.text2', { visibility: 'visible', opacity: 0, filter: 'blur(0)', duration: 0 })
    .to('.text2', { visibility: 'visible', opacity: 1, filter: 'blur(0)', duration: 1.5 })
    .to('.text2', { opacity: 0, filter: 'blur(10px)', duration: 1 })
    .to('.text3', { visibility: 'visible', opacity: 0, filter: 'blur(0)', duration: 0 })
    .to('.text3', { visibility: 'visible', opacity: 1, filter: 'blur(0)', duration: 1.5 })
    .to('.text3', { opacity: 0, filter: 'blur(10px)', duration: 1 })
    .to('.background', { opacity: 0, filter: 'blur(10px)', duration: 0 });

  return tl;
};

export const headerAnimation = () => {
  const tl = gsap.timeline();

  tl.set(".reveal-text", { y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
  tl.set(".curtain", { width: "100%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", zIndex: 1 });

  // Reveal animations
  tl.to(".reveal-text", { y: "0%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, stagger: 0.5 });
  tl.to(".curtain", { width: "0%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, delay: -0.5 });

  // Add more animations as needed

  return tl;
};
