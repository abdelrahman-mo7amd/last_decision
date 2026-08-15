"use client"

export default function Card({ img, text, className = "" }) {
    return (
        <div className={`flex flex-col gap-5 p-10 justify-center items-center border-8 font-bold border-black rounded-2xl bg-black ${className}`}>
            <div className="flex justify-center items-center p-10 text-white">
                {img}
            </div>
            <div className="flex justify-center items-center p-10 text-white">
                {text}
            </div>
        </div>
    )
}