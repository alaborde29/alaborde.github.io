import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }:any) {
  return (
    <>
      <AnimatedCursor />
      <Analytics/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;