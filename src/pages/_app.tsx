import "../styles/globals.css";
import type { AppProps } from "next/app";

// @Layout
import AppLayout from "Layout/AppLayout";

//----------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
