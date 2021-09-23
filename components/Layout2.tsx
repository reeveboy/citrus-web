import React from "react";
import Head from "next/head";

const Layout2 = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=KoHo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gradient-to-br from-primary to-secondary h-screen w-screen p-4 flex justify-center items-center">
        <div className="bg-white w-96 rounded-lg flex flex-col items-center px-3 py-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout2;
