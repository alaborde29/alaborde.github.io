'use client'
import { useEffect, useState } from 'react';
import { introAnimation, headerAnimation, fadeIn, textBounce } from '../animations';
import "../i18n"
import { useTranslation } from 'react-i18next';

const IntroAnimation = () => {
  const { t, i18n } = useTranslation('translation');
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const intro = introAnimation(() => {
      setIntroComplete(true);
      startAnimations();
    });

    intro.play();

    return () => {
      intro.kill();
    };
  }, []);

  const startAnimations = () => {
    const header = headerAnimation();
    const fade = fadeIn();
    const text = textBounce();
    header.play();
    fade.play();
    text.play();

    // Clean up header animation on component unmount
    return () => {
      header.kill();
    };
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className={`absolute inset-0 bg-black transition-opacity ${introComplete ? 'opacity-0' : 'opacity-1'} duration-1000`}></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="text-center text-4xl font-bold text-white ">
          <div className="text1 relative justify-center items-center invisible text-xl md:text-4xl lg:text-8xl">{t("intro.hello")}</div>
          <div className="text2 relative justify-center items-center invisible text-xl md:text-4xl lg:text-8xl">{t("intro.welcome")}</div>
          <div className="text3 relative justify-center items-center invisible text-8xl md:text-8xl lg:text-8xl">A.L</div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;

