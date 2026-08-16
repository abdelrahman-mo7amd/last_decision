"use client";

import Answer from "@/components/question";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const questions = [
    "would you kill the people protesting",
    "Will you make education free",
    "Do you like AI",
    "Should we never life imprison people",
    "Is there something that u are secretly planning",
];

export default function Question(){
    const router = useRouter();
    const [remaining, setRemaining] = useState(() => [...questions]);
    const [current, setCurrent] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const idx = Math.floor(Math.random() * questions.length);
        setCurrent(questions[idx]);
    }, []);

    function handleAnswer(answer) {
        setAnswers(prev => [...prev, { question: current, answer }]);
        const newRemaining = remaining.filter(q => q !== current);
        if (newRemaining.length === 0) {
            setCurrent(null);
            setRemaining([]);
            return;
        }

        const next = newRemaining[Math.floor(Math.random() * newRemaining.length)];
        setCurrent(next);
        setRemaining(newRemaining);
    }

    return (
        <div>
            <Answer question={current} onAnswer={handleAnswer} />

            {current === null && (
                <div className="flex justify-center items-center mt-10">
                    <button
                        className="bg-black text-white jersey text-4xl rounded-4xl p-5 pr-15 pl-15 button"
                        onClick={() => router.push("/decide")}
                    >
                        Continue
                    </button>
                </div>
            )}

            <div className="mt-8 text-white">
                <h3 className="text-2xl font-bold">Recorded answers</h3>
                <ul className="mt-4">
                    {answers.map((a, i) => (
                        <li key={i} className="mb-2">{a.question? a.question:""} <strong>{a.question? a.answer:""}</strong></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}