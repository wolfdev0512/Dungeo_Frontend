import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";

// @Layout
import AppLayout from "Layout/AppLayout";

// @AOS
import AOS from "aos";
import "aos/dist/aos.css";

//----------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
