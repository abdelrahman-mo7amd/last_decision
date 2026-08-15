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
        Trump Started Larping a lot and there was a NUCLEAR WAR . Yours is the only country left after the war and now u need to show your people that u are capable of the JOB
        </div>
        <div className="absolute text-white text-6xl bottom-3 right-3 jersey">
            <a href="/storyline2">
            Next..
            </a>
        </div>
        </>
    )
}