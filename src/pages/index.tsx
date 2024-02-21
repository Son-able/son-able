'use client'
import Head from "next/head";
import Script from "next/script"
import React from "react";
import fabBar from "~/features/navigation/fabBar";
import headerBar from "~/features/navigation/headerBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonable</title>
        <meta name="description" content="Sonable" />
        <link rel="icon" href="/sonable_icon.png" />
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />
      </Head>

      <main className="relative flex min-h-screen h-screen flex-col items-center justify-center align-items-center bg-gradient-to-b from-[#000000] to-[#111111]" style={{bottom: "-5px", paddingBottom: "0px"}}>
        { headerBar() }
        <div className="w-screen sticky bottom-0 p-8" style={{position: "fixed", bottom: "0px"}}>
          { fabBar() }
        </div>
      </main>
      <Script>
        feather.replace();
      </Script>
    </>
  );
}
