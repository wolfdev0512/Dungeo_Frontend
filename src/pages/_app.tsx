import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";

// @Layout
import AppLayout from "Layout/AppLayout";

// @components
import Loading from "components/loading";

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

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {loaded ? (
        <Loading />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </>
  );
}

export default MyApp;
