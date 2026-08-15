"use client"
import { useEffect } from "react"
export default function Card({ img, text }) {
    return (
        <div className="flex flex-col gap-5 p-10 justify-center items-center border-8 font-bold border-black rounded-2xl bg-black">
            <div className="flex justify-center items-center p-10 text-white">
                {img}
            </div>
            <div className="flex justify-center items-center p-10 text-white">
               <span>+</span><span>{}</span><span>-</span>
            </div>
        </div>
    )
}