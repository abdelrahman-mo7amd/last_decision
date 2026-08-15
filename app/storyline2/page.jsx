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
        BROOOO Now be ready to see the military , finances to accept people and to reject people to stay in your country and to make the decisions that will decide the fait of this country
        </div>
        <div className="absolute text-white text-6xl bottom-3 right-3 jersey">
            <a href="/storyline3">
            Next..
            </a>
        </div>
        </>
    )
}