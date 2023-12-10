import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

function MyApp({ Component, pageProps }:any) {
  return (
    <>
      <AnimatedCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;