"use client"

export default function Answer({ question, onAnswer }){
    return(
        <div className="flex flex-col justify-center items-center gap-20">
            <div className="flex justify-center items-center jersey text-6xl text-white">
                {question ?? "No more questions"}
            </div>
            <div className="flex justify-center items-center jersey text-4xl text-white gap-10">
                <button className="bg-green-600 rounded-4xl p-5 pr-10 pl-10 next" onClick={() => onAnswer && onAnswer("yes")}>
                    Yes
                </button>
                <button className="bg-red-600 rounded-4xl p-5 pr-10 pl-10 next" onClick={() => onAnswer && onAnswer("no")}>
                    No
                </button>
            </div>
        </div>
    );
}