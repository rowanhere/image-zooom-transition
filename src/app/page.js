"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [widthAmt, setWidthAmt] = useState(0);
  useEffect(() => {
    const getScroll = (e) => {

      const scrolledAmt = Math.floor(window.scrollY);
      const totalScrollHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrolledAmt / (totalScrollHeight - window.innerHeight)) * 100;
      console.log("Scroll percentage:", scrollPercentage.toFixed(2) + "%");
     
      setWidthAmt(scrollPercentage)
    };
    window.addEventListener("scroll", getScroll);
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  });
  return (
    <div className={`mb-10 fixed top-0 w-full shadow-2xl`} >
      <header className="shadow-lg"></header>
      <main className={`h-[2px] transition-[width] duration-[500ms] shadow-lg bg-blue-400`} style={{width:widthAmt+"%"}}></main>
    </div>
  );
}
