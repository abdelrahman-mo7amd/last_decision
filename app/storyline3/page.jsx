"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
export default function Story(){
    useGSAP(()=>{
        let split = SplitText.create(".text", {
  onSplit: (self) => {
    return gsap.from(self.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05
    });}
});
    },[])
    return(
        <>
        <div className="jersey text-6xl text-white flex justify-center items-center m-20 text">
        Now you need to start working on your country and your only goal is to survive if you fail you restart 
        </div>
        <div className="absolute text-white text-6xl bottom-3 right-3 jersey">
            <a href="/start">
            Next..
            </a>
        </div>
        </>
    )
}