import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../assets/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;