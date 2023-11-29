// animations.js
import gsap from 'gsap';
import splitType from 'split-type';

export const introAnimation = (onComplete) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.set('.text2, .text3', { visibility: 'hidden' })
    .to('.text1', { visibility: 'visible', opacity: 0, filter: 'blur(0)', duration: 0 })
    .to('.text1', { visibility: 'visible', opacity: 1, filter: 'blur(0)', duration: 1.5 })
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

  tl.set(".reveal-text", { visibility: 'hidden',   y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
  tl.to(".reveal-text", { visibility: 'hidden',   y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration: 0.5, stagger: 0.5 });
  tl.to(".reveal-text", { visibility: 'visible', y: "0%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, stagger: 0.5 });

  return tl;
};

export const textBounce = () => {
  const ourText = new splitType('div.undertext', { types: 'chars' })
  const chars = ourText.chars

  const tl = gsap.timeline();

  tl.fromTo(
    chars,
    {
      y: 100,
      opacity: 0
    },
    {
      visibility: 'visible',
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
    }
  )

  tl.delay(2);

  return tl;
};

export const fadeIn = () => {
  const tl = gsap.timeline();

  tl.set(".fade-in", { opacity: 0 })
    .to(".fade-in", { visibility: 'visible', opacity: 1, duration: 2, ease: "power2.inOut" });

  return tl;

};