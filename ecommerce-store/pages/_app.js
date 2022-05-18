import React from "react";
import { Toaster } from "react-hot-toast";
//this allows for notification to pop up

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
