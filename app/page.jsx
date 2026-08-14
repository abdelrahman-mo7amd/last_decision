"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    setTimeout(() => {
      let body = document.getElementById("body")
      body.innerHTML = `
      <div>
    <a href = "/start" class="hello">Start</a>
   </div>
      `
    }, 3000);
  },[])
  return (
   <div className="flex justify-center items-center gap-14 blacker p-85" id="body">
   <div id = "textfront">
   <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-front opacity-0">
<path d="M107.5 203.802C160.686 203.802 203.802 160.686 203.802 107.5C203.802 54.3139 160.686 11.198 107.5 11.198C54.3138 11.198 11.1979 54.3139 11.1979 107.5C11.1979 160.686 54.3138 203.802 107.5 203.802Z" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M107.5 185.885C150.791 185.885 185.885 150.791 185.885 107.5C185.885 64.2088 150.791 29.1145 107.5 29.1145C64.209 29.1145 29.1146 64.2088 29.1146 107.5C29.1146 150.791 64.209 185.885 107.5 185.885Z" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M107.5 110.859C109.355 110.859 110.859 109.355 110.859 107.5C110.859 105.645 109.355 104.141 107.5 104.141C105.645 104.141 104.141 105.645 104.141 107.5C104.141 109.355 105.645 110.859 107.5 110.859Z" fill="#000000"/>
<path d="M11.1979 107.5L74.7259 107.5M74.7259 114.626L74.7259 100.374M107.5 11.198L107.5 74.726M100.374 74.726L114.626 74.726M203.802 107.5L140.274 107.5M140.274 100.374L140.274 114.626M107.5 203.802L107.5 140.274M114.626 140.274L100.374 140.274" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
   </div>
   <div id="textfront" className="text-black-600 text-8xl jersey text-front opacity-0">
    Last Decision
   </div>
   </div>
  );
}
