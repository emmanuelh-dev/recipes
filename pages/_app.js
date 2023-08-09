import React from "react";
import { ApiProvider } from "@/context/ApiContext";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ApiProvider>
  );
}

export default MyApp;
